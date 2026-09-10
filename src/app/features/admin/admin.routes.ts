import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
   {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'add-course',
    loadComponent: () =>
      import('./add-course/add-course')
        .then(m => m.AddCourseComponent)
  },

  {
    path: 'delete-course',
    loadComponent: () =>
      import('./delete-courses/delete-courses')
        .then(m => m.DeleteCoursesComponent)
  },

  {
    path: 'manage-courses',
    loadComponent: () =>
      import('./manage-courses/manage-courses')
        .then(m => m.ManageCoursesComponent)
  },

  {
    path: 'quizes',
    loadComponent: () =>
      import('./quizzes/quizzes')
        .then(m => m.QuizzesComponent)
  },

  {
    path: 'student-management',
    loadComponent: () =>
      import('./student-management/student-management')
        .then(m => m.StudentManagementComponent)
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./admin-profile/admin-profile')
        .then(m => m.AdminProfile)
  },
  {
    path: 'setting',
    loadComponent: () =>
      import('./admin-settings/admin-settings')
        .then(m => m.AdminSettingsComponent)
  },
];
