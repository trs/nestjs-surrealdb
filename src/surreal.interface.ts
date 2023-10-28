import { AuthenticationScope } from 'surrealdb.js';

export interface SurrealModuleOptions {
  url: string;
  auth: AuthenticationScope;
}
