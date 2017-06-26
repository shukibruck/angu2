import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TimerModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(TimerModule);