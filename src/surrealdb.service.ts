import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import Surreal, { Data } from 'surrealdb.js';

import { SurrealDBModuleOptions } from './surrealdb.interface';
import { MODULE_OPTIONS_TOKEN } from './surrealdb.module-definition';

@Injectable()
export class SurrealDBService implements OnModuleDestroy {
  #db: Surreal;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly options: SurrealDBModuleOptions
  ) {
    this.#db = new Surreal();
  }

  async onModuleDestroy() {
    await this.#db.close();
  }

  public async connect() {
    await this.#db.connect(this.options.url);
    await this.#db.signin(this.options.auth);
  }

  public authenticate(token: string) {
    return this.#db.authenticate(token);
  }

  public invalidate() {
    return this.#db.invalidate();
  }

  public let(key, val: Data) {
    return this.#db.let(key, val);
  }

  public query(sql: string, vars?: Record<string, string>) {
    return this.#db.query(sql, vars);
  }

  public select(thing: string) {
    return this.#db.select(thing);
  }

  public create(thing: string, data?: Data) {
    return this.#db.create(thing, data);
  }

  public update(thing: string, data?: Data) {
    return this.#db.update(thing, data);
  }

  public change(thing: string, data?: Data) {
    return this.#db.change(thing, data);
  }

  public modify(thing: string, data?: Data) {
    return this.#db.modify(thing, data);
  }

  public delete(thing: string) {
    return this.#db.delete(thing);
  }
}
