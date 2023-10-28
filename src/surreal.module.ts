import { Module } from '@nestjs/common';
import { SurrealModuleOptions } from './surreal.interface';

import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
} from './surreal.module-definition';
import { SurrealService } from './surreal.service';

@Module({
  providers: [
    {
      provide: SurrealService,
      inject: [MODULE_OPTIONS_TOKEN],
      useFactory: async (options: SurrealModuleOptions) => {
        const service = new SurrealService();
        await service.connect(options.url);
        await service.signin(options.auth);
        options.use && (await service.use(options.use.ns, options.use.db));
        return service;
      },
    },
  ],
  exports: [SurrealService],
})
export class SurrealModule extends ConfigurableModuleClass {}
