import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {

  // providers: [provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
  //       enabled: !isDevMode(),
  //       registrationStrategy: 'registerWhenStable:30000'
  //   })]
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideAnimations(), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};
