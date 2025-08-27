import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app-routing';
import { FormsModule } from '@angular/forms';

export const appConfig = [
  provideRouter(routes),
  importProvidersFrom(FormsModule,RouterModule)
];
