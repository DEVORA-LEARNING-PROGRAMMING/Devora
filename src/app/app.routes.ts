import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
   loadChildren: () =>
      import('./features/features.routes')
        .then(m => m.features)
  },

  
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features.routes')
        .then(m => m.features)
  },

  

  {
    path: '**',
    redirectTo: ''
  }

];