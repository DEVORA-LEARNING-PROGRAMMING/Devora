import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../../shared/sidebar/sidebar';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './logout.html',
  styleUrls: ['./logout.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  onCancel(): void {
    this.router.navigate(['/student/dashboard']);
  }

  onConfirmLogout(): void {

    this.router.navigate(['/student/landing']);
  }
}
