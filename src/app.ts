#!/usr/bin/env node
import 'source-map-support/register';
import { SampleAppStack } from './stack';
import * as cdk from '@aws-cdk/core';

const app = new cdk.App();
new SampleAppStack(app, 'SampleAppStack');
