import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {defineCustomElements} from '../../../web-components/index'

if (environment.production) {
  enableProdMode();
}

defineCustomElements();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
