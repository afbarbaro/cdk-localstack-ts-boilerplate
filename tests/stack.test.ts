import { SampleAppStack } from '../src/stack';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';

test('Empty Stack', () => {
	const app = new cdk.App();
	const stack = new SampleAppStack(app, 'TestStack');

	expect(stack).toHaveResource('AWS::ApiGateway::RestApi', {
		Name: 'sampleapp-api',
	});

	expect(stack).toHaveResourceLike('AWS::Lambda::Function', {
		Code: { S3Bucket: '__local__' },
		Handler: 'index.handler',
		Runtime: 'nodejs12.x',
	});

	expect(stack).toCountResources('AWS::Lambda::Function', 2);
});
