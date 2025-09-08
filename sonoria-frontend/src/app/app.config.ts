import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "sonoria-4512b",
      appId: "1:1050208771116:web:94a2000f27d0763e7d0589",
      storageBucket: "sonoria-4512b.firebasestorage.app",
      apiKey: "AIzaSyAjRTAwMfMZzzHXqGMohomzXLPJHjdDRMg",
      authDomain: "sonoria-4512b.firebaseapp.com",
      messagingSenderId: "1050208771116"
    })), provideAuth(() => getAuth())]
};
