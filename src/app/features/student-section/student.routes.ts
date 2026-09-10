import { Routes } from '@angular/router';

export const studentRoutes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./landing/landing')
        .then(m => m.LandingComponent)
  },


  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.Dashboard)
  },


  {
    path: 'courses',
    loadComponent: () =>
      import('./course/course')
        .then(m => m.CoursesComponent)
  },


  {
    path: 'quizes',
    loadComponent: () =>
      import('./quizes/quizes')
        .then(m => m.QuizesComponent)
  },


  {
    path: 'progress',
    loadComponent: () =>
      import('./progress/progress')
        .then(m => m.Progress)
  },


  {
    path: 'achievement',
    loadComponent: () =>
      import('./achievements/achievements')
        .then(m => m.AchievementComponent)
  },


  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile')
        .then(m => m.ProfileComponent)
  },


  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings')
        .then(m => m.SettingsComponent)
  },


  {
    path: 'logout',
    loadComponent: () =>
      import('./logout/logout')
        .then(m => m.LogoutComponent)
  },


  {
    path: 'lesson/:id',
    loadComponent: () =>
      import('./lessons/lessons')
        .then(m => m.LessonComponent)
  },


  {
    path: 'exam/:id',
    loadComponent: () =>
      import('./exam/exam')
        .then(m => m.ExamComponent)
  },


  {
    path: 'result',
    loadComponent: () =>
      import('./exam-result/exam-result')
        .then(m => m.ExamResult)
  }

];
