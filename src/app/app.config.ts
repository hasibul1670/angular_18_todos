import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAOcuwMViR0l4ibylTcZOW2acpAtvKb33w',
  authDomain: 'todoes18-aac0e.firebaseapp.com',
  projectId: 'todoes18-aac0e',
  storageBucket: 'todoes18-aac0e.appspot.com',
  messagingSenderId: '745949205333',
  appId: '1:745949205333:web:faa76e59ad1accae4e55dc',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
  ],
};
