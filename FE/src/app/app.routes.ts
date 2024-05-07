import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'calendar',
        pathMatch: 'full',
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import(
            './modules/calendar/pages/main-calendar-view/main-calendar-view.component'
          ).then((c) => c.MainCalendarViewComponent),
      },
    ],
  },
];
