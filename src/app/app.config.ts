import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import { provideServiceWorker } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { AppInterface } from './app.config.interferance';

export const AppDB: AppInterface = {
  apiEndpoint: 'https://api.themoviedb.org/3',
  apiKey: environment.theMovieDBApi,
}

export const AppConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideAnimations(), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};
