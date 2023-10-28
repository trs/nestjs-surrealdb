import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import Surreal from 'surrealdb.js';

import { SurrealDBModuleOptions } from './surrealdb.interface';
import { MODULE_OPTIONS_TOKEN } from './surrealdb.module-definition';

@Injectable()
export class SurrealDBService extends Surreal implements OnModuleDestroy {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly options: SurrealDBModuleOptions
  ) {
    super();
  }

  async onModuleDestroy() {
    await this.close();
  }
}
