import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../../shared/sidebar/sidebar';
import { UserService } from '../../../shared/services/user.service';

interface Stat {
  value: string;
  label: string;
}

interface Achievement {
  title: string;
  finishedOn: string;
  iconBg: string;
  icon: 'html' | 'css' | 'js';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {

  constructor(private userService: UserService) {}

  get user() {
    return this.userService.getUser();
  }

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  get username(): string {
    return this.user.username;
  }

  get email(): string {
    return this.user.email;
  }

  get bio(): string {
    return this.user.bio;
  }

  get avatarUrl(): string | null {
    return this.user.avatarUrl;
  }

  get initials(): string {

    return `${this.user.firstName[0] ?? ''}${this.user.lastName[0] ?? ''}`
      .toUpperCase();
  }


  stats: Stat[] = [
    {
      value: '73%',
      label: 'overall progress'
    },
    {
      value: '124h',
      label: 'Learning Hours'
    },
    {
      value: '84%',
      label: 'Quiz Average'
    },
    {
      value: '12days',
      label: 'Current streak'
    }
  ];


  achievements: Achievement[] = [

    {
      title: 'HTML Courses',
      finishedOn: '8/3/2026',
      iconBg: '#e34f26',
      icon: 'html'
    },

    {
      title: 'CSS Courses',
      finishedOn: '8/3/2026',
      iconBg: '#1572b6',
      icon: 'css'
    },

    {
      title: 'JS Courses',
      finishedOn: '8/3/2026',
      iconBg: '#f0db4f',
      icon: 'js'
    }

  ];


  onViewAchievement(
    achievement: Achievement
  ): void {

    console.log(
      'View achievement:',
      achievement.title
    );

  }

}