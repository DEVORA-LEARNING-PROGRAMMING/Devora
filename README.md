# ExamPlatform — Devora Frontend 🎓

> Angular frontend for the Devora e-learning platform — programming courses for high-school & baccalaureate students.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Angular](https://img.shields.io/badge/Angular-21-red)

## 📖 About

ExamPlatform is the student-facing and admin-facing web app for Devora, an e-learning system teaching programming to high-school and baccalaureate students. Built with Angular as part of the NTI program.

## ✨ Features

- 🔐 Authentication (Sign up, Sign in, Forgot/Reset password)
- 👤 Profile & settings management
- 📚 Student dashboard, courses, and quizzes
- 🛠️ Admin panel for course & student management
- 🎨 Devora design system (Figma-based UI)

## 🧱 Tech Stack

Angular 21, TypeScript, HTML, SCSS

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/FatmaElghoury/NTI_front_project_withoutAPI.git
cd NTI_front_project_withoutAPI
npm install
```

Start the dev server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` — the app reloads automatically on file changes.

## 🏗️ Building

```bash
ng build
```

Build artifacts are output to the `dist/` directory, optimized for production by default.

## 🧪 Testing

Unit tests (via Vitest):

```bash
ng test
```

## 📁 Project Structure

```
src/app/
├── core/           # Guards, interceptors, services, models
├── features/       # Feature modules (auth, student-section, admin, profile, settings)
└── shared/         # Reusable components (sidebar, search-header)
```

## 📌 Status

🚧 Actively in development.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
