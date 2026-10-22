import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./pages/splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },  {
    path: 'add-colab',
    loadComponent: () => import('./pages/add-colab/add-colab.page').then( m => m.AddColabPage)
  },

];
