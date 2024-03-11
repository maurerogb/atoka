import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/public/public.routes').then(m => m.PUBLIC_ROUTES),
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/protected/protected.routes').then(m => m.PROTECTED_ROUTES),
  },

];
