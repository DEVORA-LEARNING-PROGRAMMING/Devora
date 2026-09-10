import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { QuizesComponent } from '../../features/student-section/quizes/quizes';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  isLogout?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  logoText: string = 'Devora';
  logoIcon: string = 'D';

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: '▦', route: '/student/dashboard' },
    { label: 'Courses', icon: '🎓', route: '/student/courses' },
    { label: 'Quizes', icon: '💡', route: '/student/quizes' },
    { label: 'Progress', icon: '📈', route: '/student/progress' },
    { label: 'Achievement', icon: '🏅', route: '/student/achievement' },
    { label: 'Profile', icon: '👤', route: '/student/profile' },
    { label: 'Settings', icon: '⚙️', route: '/student/settings' },
    { label: 'Log Out', icon: '🚪', route: '/student/logout', isLogout: true }
  ];

  constructor(private router: Router) {}

  handleNavClick(item: NavItem): void {
    if (item.isLogout) {
      
      localStorage.clear();
    }
    this.router.navigate([item.route]);
  }
}
