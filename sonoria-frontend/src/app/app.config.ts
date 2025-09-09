import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideStore } from '@ngrx/store';
import {provideHttpClient} from '@angular/common/http';
import {authReducer} from './ngrx/auth/auth.reducer';
import {categoryReducer} from './ngrx/category/category.reducer';
import {trackReducer} from './ngrx/track/track.reducer';
import { provideEffects } from '@ngrx/effects';
import * as AuthEffects from './ngrx/auth/auth.effect'
import * as CategoryEffects from './ngrx/category/category.effect'
import * as TrackEffects from './ngrx/track/track.effect'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
        auth: authReducer,
        category: categoryReducer,
        track: trackReducer,
    }),
    provideEffects(
      AuthEffects,
      CategoryEffects,
      TrackEffects,
    ),
    provideFirebaseApp(() => initializeApp({
        projectId: "sonoria-4512b",
        appId: "1:1050208771116:web:94a2000f27d0763e7d0589",
        storageBucket: "sonoria-4512b.firebasestorage.app",
        apiKey: "AIzaSyAjRTAwMfMZzzHXqGMohomzXLPJHjdDRMg",
        authDomain: "sonoria-4512b.firebaseapp.com",
        messagingSenderId: "1050208771116"
    })), provideAuth(() => getAuth()),
]
};
