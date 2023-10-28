import { Module } from '@nestjs/common';
import { SurrealDBModuleOptions } from './surrealdb.interface';

import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
} from './surrealdb.module-definition';
import { SurrealDBService } from './surrealdb.service';

@Module({
  providers: [
    {
      provide: SurrealDBService,
      inject: [MODULE_OPTIONS_TOKEN],
      useFactory: async (options: SurrealDBModuleOptions) => {
        const service = new SurrealDBService(options);
        await service.connect(options.url);
        await service.signin(options.auth);
        return service;
      },
    },
  ],
  exports: [SurrealDBService],
})
export class SurrealDBModule extends ConfigurableModuleClass {}
