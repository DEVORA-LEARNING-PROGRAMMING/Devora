import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../../shared/sidebar.admin/sidebar.admin';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterLink],
  templateUrl: './admin-profile.html',
  styleUrl: './admin-profile.css',
})
export class AdminProfile {

  achievements = [
    {
      title: 'USER MANAGEMENT',
      description: 'Manage all platform users',
      icon: 'fa-solid fa-users',
      color: 'users'
    },
    {
      title: 'COURSE MANAGEMENT',
      description: 'Manage and organize courses',
      icon: 'fa-solid fa-book-open',
      color: 'courses'
    },
    {
      title: 'SYSTEM CONTROL',
      description: 'Monitor platform activities',
      icon: 'fa-solid fa-shield-halved',
      color: 'system'
    }
  ];

  editProfile(): void {
    console.log('Edit Profile');
  }

  viewAchievement(title: string): void {
    console.log(title);
  }
}