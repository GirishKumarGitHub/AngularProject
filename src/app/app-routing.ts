import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HelpUser } from './help-user/help-user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'help', component: HelpUser }
];
