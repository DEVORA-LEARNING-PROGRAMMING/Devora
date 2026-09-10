import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {

  constructor(private router: Router) {}

  onStartLearning(): void {
    console.log('Start Learning button clicked');

  }

  onBrowseCourses(): void {
    console.log('Browse Courses button clicked');
  }

  // Authentication Navigation
  onSignIn(event: Event): void {
    event.preventDefault();
    console.log('Sign in clicked');
  }

  onGetStarted(): void {
    console.log('Get started clicked');
    // this.router.navigate(['/register']);
  }
}
