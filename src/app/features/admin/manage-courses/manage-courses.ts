import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../shared/sidebar.admin/sidebar.admin';
import { SearchHeader } from '../../../shared/search.header/search.header';

export interface Course {
  id: number;
  title: string;
  author: string;
  duration: string;
  lessonsCount: number;
  rating: number;
  brandClass: string;
  icon?: string;
  brandText?: string;
  image?: string;
}

@Component({
  selector: 'app-manage-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, SearchHeader],
  templateUrl: './manage-courses.html',
  styleUrls: ['./manage-courses.css']
})
export class ManageCoursesComponent implements OnInit {
  @Input() searchTerm: string = '';

  defaultCourses: Course[] = [
    { id: 1, title: 'HTML Course', author: 'Developer', duration: '8h', lessonsCount: 24, rating: 4.7, brandClass: 'html-bg', icon: 'html5' },
    { id: 2, title: 'CSS Course', author: 'Developer', duration: '13h', lessonsCount: 50, rating: 4.7, brandClass: 'css-bg', icon: 'css3' },
    { id: 3, title: 'JS Course', author: 'Developer', duration: '19h', lessonsCount: 95, rating: 4.7, brandClass: 'js-bg', icon: 'javascript' },
    { id: 4, title: 'C++ Course', author: 'Developer', duration: '20h', lessonsCount: 100, rating: 4.7, brandClass: 'cpp-bg', icon: 'cpp' },
    { id: 5, title: 'React Course', author: 'Developer', duration: '22h', lessonsCount: 100, rating: 4.7, brandClass: 'react-bg', icon: 'react' },
    { id: 6, title: 'Python Course', author: 'Developer', duration: '22h', lessonsCount: 100, rating: 4.7, brandClass: 'python-bg', icon: 'python' }
  ];

  courses: Course[] = [];

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      this.courses = JSON.parse(storedCourses);
    } else {
      this.courses = this.defaultCourses;
      localStorage.setItem('courses', JSON.stringify(this.defaultCourses));
    }
  }

  get filteredCourses(): Course[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.courses;
    }
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(term) ||
      course.author.toLowerCase().includes(term)
    );
  }

  onCheckCourse(course: Course): void {
    alert(`Opening details for: ${course.title}`);
  }
}