import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Surreal from 'surrealdb.js';

@Injectable()
export class SurrealService extends Surreal implements OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleDestroy() {
    await this.close();
  }
}
