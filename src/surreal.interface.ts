import { Surreal } from 'surrealdb.js';

export type ConnectionOptions = Parameters<
  InstanceType<typeof Surreal>['connect']
>[1];

export interface SurrealModuleOptions {
  url: string;
  options?: ConnectionOptions;
}
