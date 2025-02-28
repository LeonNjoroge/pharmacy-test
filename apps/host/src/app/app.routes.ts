import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const remoteRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './Route').then(m => m.remoteRoutes),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Route').then(m => m.remoteRoutes),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
