import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
      {
        path: 'game-life',
        loadComponent: () =>
          import(
            './modules/game-of-life/components/game-of-life/game-of-life.component'
          ).then((c) => c.GameOfLifeComponent),
      },
    ],
  },
];
