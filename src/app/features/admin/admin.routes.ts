import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
   {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  // Admin Dashboard
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  // Add Course
  {
    path: 'add-course',
    loadComponent: () =>
      import('./add-course/add-course')
        .then(m => m.AddCourseComponent)
  },

  // Delete Course
  {
    path: 'delete-course',
    loadComponent: () =>
      import('./delete-courses/delete-courses')
        .then(m => m.DeleteCoursesComponent)
  },

  // Manage Courses
  {
    path: 'manage-courses',
    loadComponent: () =>
      import('./manage-courses/manage-courses')
        .then(m => m.ManageCoursesComponent)
  },

  // Quizzes
  {
    path: 'quizes',
    loadComponent: () =>
      import('./quizzes/quizzes')
        .then(m => m.QuizzesComponent)
  },

  // Student Management
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