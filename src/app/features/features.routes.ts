import { Routes } from '@angular/router';

export const features: Routes = [
 {
    path: '',
    loadChildren: () =>
      import('./student-section/student.routes')
        .then(m => m.studentRoutes)
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes')
        .then(m => m.adminRoutes)
  },

  
  {
    path: 'register',
    loadChildren: () =>
      import('./REGISTER/register.routes')
        .then(m => m.registerRoutes)
  },

  {
    path: 'student',
    loadChildren: () =>
      import('./student-section/student.routes')
        .then(m => m.studentRoutes)
  },


  {
    path: '**',
    redirectTo: ''
  }

];