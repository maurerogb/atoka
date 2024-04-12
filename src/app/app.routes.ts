import { Routes } from '@angular/router';
import { authGuard } from './services/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/public/public.routes').then(m => m.PUBLIC_ROUTES),
  },
  {
    path: 'app',
    canActivate:[authGuard],
    loadChildren: () => import('./pages/protected/protected.routes').then(m => m.PROTECTED_ROUTES),
  },

];
