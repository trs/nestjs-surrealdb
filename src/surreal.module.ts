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
      useFactory: async ({ url, options }: SurrealModuleOptions) => {
        const service = new SurrealService();
        await service.connect(url, options);
        return service;
      },
    },
  ],
  exports: [SurrealService],
})
export class SurrealModule extends ConfigurableModuleClass {}
