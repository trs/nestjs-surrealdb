declare module 'surrealdb.js' {
  export type Data = Record<string, any>;

  export interface AuthenticationScope {
    NS?: string;
    DB?: string;
    user?: string;
    pass?: string;
  }

  export default class Surreal {
    constructor(url?: string, token?: string) {}

    connect(url: string): Promise<void>;
    wait(): Promise<void>;
    close(): Promise<void>;
    use(ns: string, db: string): Promise<void>;
    signup(scope: AuthenticationScope): Promise<void>;
    signin(scope: AuthenticationScope): Promise<void>;
    invalidate(): Promise<void>;
    authenticate(token: string): Promise<void>;
    let(key: string, val: Data): Promise<void>;
    query(sql: string, vars?: Record<string, string>): Promise<void>;
    select(thing: string);
    create(thing: string, data?: Data);
    update(thing: string, data?: Data);
    change(thing: string, data?: Data);
    modify(thing: string, data?: Data);
    delete(thing: string);
  }
}
