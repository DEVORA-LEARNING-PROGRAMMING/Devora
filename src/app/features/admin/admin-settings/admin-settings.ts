import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../shared/sidebar.admin/sidebar.admin';
import { RouterLink } from "@angular/router";

interface AdminProfile {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  bio: string;
}

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, RouterLink],
  templateUrl: './admin-settings.html',
  styleUrls: ['./admin-settings.css']
})
export class AdminSettingsComponent {
  adminProfile: AdminProfile = {
    firstName: 'Admin',
    lastName: 'System',
    userName: 'admin.devora',
    email: 'admin@devora.io',
    bio: 'System administrator managing platform settings, user roles, and platform operations.'
  };

  getInitials(): string {
    const first = this.adminProfile.firstName.charAt(0) || '';
    const last = this.adminProfile.lastName.charAt(0) || '';
    return `${first}${last}`.toUpperCase();
  }

  onChangePhoto(): void {
    console.log('Change photo clicked');
  }

  onLogout(): void {
    console.log('Logging out...');
  }

  onCancel(): void {
    console.log('Cancelled changes');
  }

  onSave(): void {
    console.log('Saved admin profile:', this.adminProfile);
  }
}