import { Routes } from '@angular/router';

export const studentRoutes: Routes = [

  // Landing
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing')
        .then(m => m.LandingComponent)
  },


  // Dashboard
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.Dashboard)
  },


  // Courses
  {
    path: 'courses',
    loadComponent: () =>
      import('./course/course')
        .then(m => m.CoursesComponent)
  },


  // Quizzes
  {
    path: 'quizes',
    loadComponent: () =>
      import('./quizes/quizes')
        .then(m => m.QuizesComponent)
  },


  // Progress
  {
    path: 'progress',
    loadComponent: () =>
      import('./progress/progress')
        .then(m => m.Progress)
  },


  // Achievements
  {
    path: 'achievement',
    loadComponent: () =>
      import('./achievements/achievements')
        .then(m => m.AchievementComponent)
  },


  // Profile
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile')
        .then(m => m.ProfileComponent)
  },


  // Settings
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings')
        .then(m => m.SettingsComponent)
  },


  // Logout
  {
    path: 'logout',
    loadComponent: () =>
      import('./logout/logout')
        .then(m => m.LogoutComponent)
  },


  // Lesson
  {
    path: 'lesson/:id',
    loadComponent: () =>
      import('./lessons/lessons')
        .then(m => m.LessonComponent)
  },


  // Exam
  {
    path: 'exam/:id',
    loadComponent: () =>
      import('./exam/exam')
        .then(m => m.ExamComponent)
  },


  // Exam Result
  {
    path: 'result',
    loadComponent: () =>
      import('./exam-result/exam-result')
        .then(m => m.ExamResult)
  }

];