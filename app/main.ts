import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
require('./styles.css');

platformBrowserDynamic().bootstrapModule(AppModule);
