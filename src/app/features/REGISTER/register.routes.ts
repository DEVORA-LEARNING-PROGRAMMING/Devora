import { Routes } from '@angular/router';

export const registerRoutes: Routes = [

  {
    path: 'signin',
    loadComponent: () =>
      import('./signin/signin')
        .then(m => m.SigninComponent)
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup')
        .then(m => m.SignupComponent)
  },

  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forget-password/forget-password')
        .then(m => m.ForgetPasswordComponent)
  },

  {
    path: 'verify-code',
    loadComponent: () =>
      import('./verify-code/verify-code')
        .then(m => m.VerifyCodeComponent)
  }

];