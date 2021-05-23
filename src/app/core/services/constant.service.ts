import { InjectionToken } from '@angular/core';

export interface AppConfig {
  App: string;
  Ver: string;
  API_URL: string;
}

export const configToken = new InjectionToken<AppConfig>('app config');

export const configValue: AppConfig = {
  App: 'TaskManager',
  Ver: '1.0',
  API_URL: 'http://demo',
};
