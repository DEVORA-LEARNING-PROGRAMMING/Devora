import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css']
})
export class SigninComponent {

  email = '';
  password = '';
  showPassword = false;
  isSubmitting = false;
  successMessage = '';

  errors: {
    email?: string;
    password?: string;
  } = {};

  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private mockAccounts = [
    { email: 'student@gmail.com', password: '123456', role: 'student', redirect: '/student/dashboard' },
    { email: 'admin@gmail.com', password: '123456', role: 'admin', redirect: '/admin/dashboard' }
  ];

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.errors = {};
    this.successMessage = '';

    if (!this.emailRegex.test(this.email.trim())) {
      this.errors.email = 'Enter a valid email address.';
    }

    if (!this.password) {
      this.errors.password = 'Enter your password.';
    }

    if (Object.keys(this.errors).length > 0) {
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;

      const account = this.mockAccounts.find(
        acc =>
          acc.email === this.email.trim().toLowerCase() &&
          acc.password === this.password
      );

      if (!account) {
        this.errors.password = 'Invalid email or password.';
        return;
      }

      this.successMessage = `Signed in as ${account.role}. Redirecting...`;

      setTimeout(() => {
        this.router.navigate([account.redirect]);
      }, 500);

    }, 600);
  }
}
