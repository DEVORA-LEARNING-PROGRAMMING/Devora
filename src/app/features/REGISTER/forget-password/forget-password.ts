import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrls: ['./forget-password.css']
})
export class ForgetPasswordComponent {

  email = '';

  errors: {
    email?: string;
  } = {};

  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private router: Router) {}

  onSubmit(): void {

    this.errors = {};

    if (!this.emailRegex.test(this.email.trim())) {

      this.errors.email =
        'Enter a valid email address.';

      return;
    }

    this.router.navigate(['/register/verify-code']);
  }
}
