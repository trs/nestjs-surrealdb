import { AuthenticationScope } from 'surrealdb.js';

export interface SurrealDBModuleOptions {
  url: string;
  auth: AuthenticationScope;
}
