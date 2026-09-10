import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  iconClass: string;
  route: string;
  isLogout?: boolean;
}

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.admin.html',
  styleUrls: ['./sidebar.admin.css']
})
export class SidebarComponent {
  brandName: string = 'Devora';
  brandIconLetter: string = 'D';

  navItems: NavItem[] = [
    { label: 'Dashboard', iconClass: 'fa-solid fa-table-cells-large', route: '/admin/dashboard' },
    { label: 'Courses', iconClass: 'fa-solid fa-graduation-cap', route: '/admin/manage-courses' },
    { label: 'Quizzes', iconClass: 'fa-solid fa-lightbulb', route: '/admin/quizes' },
    { label: 'Students', iconClass: 'fa-solid fa-user-graduate', route: '/admin/student-management' },
    { label: 'Profile', iconClass: 'fa-solid fa-user', route: '/admin/profile' },
    { label: 'Settings', iconClass: 'fa-solid fa-gear', route: '/admin/setting' },
    { label: 'Log Out', iconClass: 'fa-solid fa-right-from-bracket', route: '', isLogout: true }
  ];

  handleNavClick(item: NavItem): void {
    if (item.isLogout) {
      this.onLogout();
    }
  }

  private onLogout(): void {
    console.log('Logging out user...');
  }
}
