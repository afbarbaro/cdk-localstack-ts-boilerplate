import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { Code, Runtime, Function } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Bucket } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { CfnOutput } from '@aws-cdk/core';
import * as path from 'path';
import { readdirSync } from 'fs';

const TEST = process.env.NODE_ENV === 'test';
const LOCAL = process.env.npm_lifecycle_event!.includes('cdklocal') || TEST;
const USE_NODEJS_FUNCTION = process.env.USE_NODEJS_FUNCTION == 'true';

const srcPath = __dirname;
const codePath = USE_NODEJS_FUNCTION
	? srcPath
	: srcPath.replace('/src', '/dist');
const lambdaPath = path.resolve(codePath, 'lambda');

export class SampleAppStack extends cdk.Stack {
	constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const api = new RestApi(this, 'sampleapp-api', {});
		const s3Bucket = LOCAL
			? Bucket.fromBucketName(this, 'LocalStackBucket', '__local__')
			: undefined;

		readdirSync(lambdaPath).forEach((lambdaDir) => {
			this.log(`Configuring Lambda ${lambdaDir}`);

			let lambda;
			if (USE_NODEJS_FUNCTION) {
				lambda = new NodejsFunction(this, lambdaDir, {
					entry: `${lambdaPath}/${lambdaDir}/index.ts`,
					handler: 'handler',
				});
			} else {
				lambda = new Function(this, lambdaDir, {
					runtime: Runtime.NODEJS_12_X,
					code: s3Bucket
						? Code.fromBucket(s3Bucket, `${lambdaPath}/${lambdaDir}`)
						: Code.fromAsset(`${lambdaPath}/${lambdaDir}`),
					handler: 'index.handler',
				});
			}

			const lambdaIntegration = new LambdaIntegration(lambda);
			const lambdaResource = api.root.addResource(lambdaDir);
			lambdaResource.addMethod('GET', lambdaIntegration);

			if (LOCAL) {
				new CfnOutput(this, `Endpoint-${lambdaDir}`, {
					value: `http://localhost:4566/restapis/${api.restApiId}/prod/_user_request_${lambdaResource.path}`,
				});
			}
		});
	}

	private log(message?: any, ...optionalParams: any[]): void {
		if (!TEST) {
			optionalParams?.length > 0
				? console.log(message, optionalParams)
				: console.log(message);
		}
	}
}
