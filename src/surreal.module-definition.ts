import { ConfigurableModuleBuilder } from '@nestjs/common';
import { SurrealModuleOptions } from './surreal.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<SurrealModuleOptions>()
  .setExtras({ global: true }, (definition, extra) => ({
    ...definition,
    global: extra.global,
  }))
  .build();
