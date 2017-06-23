import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if(!window || !window.sessionStorage) {
    var sessionStorage = {
        items: {},

        getItem: (key: string) => this.items[key],

        setItem: (key: string, value: string) => this.items[key] = value
    };
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
