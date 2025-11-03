import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // your main root component
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

// Bootstrapping Angular App with Router and Config
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    ...(appConfig.providers || [])
  ]
}).catch(err => console.error(err));
