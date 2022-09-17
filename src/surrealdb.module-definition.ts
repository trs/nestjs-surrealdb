import { ConfigurableModuleBuilder } from '@nestjs/common';
import { SurrealDBModuleOptions } from './surrealdb.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<SurrealDBModuleOptions>()
  .setExtras({ global: true }, (definition, extra) => ({
    ...definition,
    global: extra.global,
  }))
  .build();
