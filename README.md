# A CDK + Localstack + TypeScript Boilerplate for Lambda Development

This is a boilerplate project for developing serverless Lambda functions with TypeScript, AWS CDK, and Localstack.

## Useful npm commands

### Build, watch, test

- `npm run build` Compile Typescript to js
- `npm run watch` Watch for changes to Typescript and compile
- `npm run test` Run the Jest unit tests

### Deploy to localstack

- `npm run cdklocal:bootstrap` Bootstrap the CDK stack to be able to deploy it to localstack
- `npm run cdklocal:deploy` Deploy the stack to localstack

### Deploy to AWS

- `npm run cdk:bootstrap` Bootstrap the CDK stack to be able to deploy it to AWS
- `npm run cdk:deploy` Deploy the stack to AWS

## Credits and references

This repository expands on several original ideas and guidance provided by these blog post and accompanying repositories.

- https://dev.to/_mikigraf/localstack-cdk-local-aws-development-58ff
  - https://github.com/mikigraf/CDK-with-Localstack
- https://dev.to/martzcodes/dynamodb-lambdas-and-api-gw-with-localstack-or-not-4bm8#lambdas
  - https://github.com/martzcodes/blog-cdk-localstack/blob/master/lib/blog-cdk-localstack-stack.ts
