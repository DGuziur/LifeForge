import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./layout/layout.component').then((c) => c.LayoutComponent),
  },
];
