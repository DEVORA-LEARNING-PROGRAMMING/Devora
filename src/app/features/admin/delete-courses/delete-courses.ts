import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../shared/sidebar.admin/sidebar.admin';

interface Course {
  id: number;
  title: string;
  author?: string;
  lessonsCount: number;
  duration: string;
  icon?: string;
  brandClass?: string;
  image?: string;
  selected?: boolean;
}

@Component({
  selector: 'app-delete-courses',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './delete-courses.html',
  styleUrls: ['./delete-courses.css']
})
export class DeleteCoursesComponent implements OnInit {



  defaultCourses: Course[] = [

    {
      id: 1,
      title: 'HTML COURSES',
      lessonsCount: 24,
      duration: '8h',
      icon: 'html5',
      brandClass: 'html-bg',
      selected: false
    },

    {
      id: 2,
      title: 'CSS COURSES',
      lessonsCount: 50,
      duration: '13h',
      icon: 'css3',
      brandClass: 'css-bg',
      selected: false
    },

    {
      id: 3,
      title: 'JS COURSES',
      lessonsCount: 95,
      duration: '19h',
      icon: 'javascript',
      brandClass: 'js-bg',
      selected: false
    }

  ];



  courses: Course[] = [];

  isModalOpen = false;

  itemsToDelete: Course[] = [];



  ngOnInit(): void {
    this.loadCourses();
  }



  loadCourses(): void {

    const storedCourses = localStorage.getItem('courses');

    if (storedCourses) {

      try {

        const parsedCourses: Course[] = JSON.parse(storedCourses);

        this.courses = parsedCourses.map(course => ({
          ...course,
          selected: false
        }));

      } catch (error) {

        console.error('Error reading courses:', error);

        this.courses = this.defaultCourses;

        localStorage.setItem(
          'courses',
          JSON.stringify(this.defaultCourses)
        );
      }

    } else {

      this.courses = [...this.defaultCourses];

      localStorage.setItem(
        'courses',
        JSON.stringify(this.defaultCourses)
      );
    }
  }



  getCourseIcon(course: Course): string {

    if (!course.icon) {
      return 'fa-solid fa-graduation-cap';
    }

    if (course.icon.includes('fa-')) {
      return course.icon;
    }

    const iconMap: { [key: string]: string } = {

      html5: 'fa-brands fa-html5',

      css3: 'fa-brands fa-css3-alt',

      javascript: 'fa-brands fa-js',

      js: 'fa-brands fa-js',

      cpp: 'fa-solid fa-code',

      react: 'fa-brands fa-react',

      python: 'fa-brands fa-python',

      java: 'fa-brands fa-java'

    };

    return (
      iconMap[course.icon.toLowerCase()] ||
      'fa-solid fa-graduation-cap'
    );
  }



  get hasSelectedCourses(): boolean {

    return this.courses.some(
      course => course.selected === true
    );
  }



  toggleSelection(course: Course): void {

    course.selected = !course.selected;
  }




  onDeleteSingle(course: Course): void {

    this.itemsToDelete = [course];

    this.openModal();
  }




  onDeleteSelected(): void {

    const selectedCourses = this.courses.filter(
      course => course.selected === true
    );

    if (selectedCourses.length === 0) {
      return;
    }

    this.itemsToDelete = selectedCourses;

    this.openModal();
  }



  confirmDelete(): void {

    const idsToRemove = new Set(
      this.itemsToDelete.map(course => course.id)
    );

    this.courses = this.courses.filter(
      course => !idsToRemove.has(course.id)
    );


    const coursesToSave = this.courses.map(
      ({ selected, ...course }) => course
    );


    localStorage.setItem(
      'courses',
      JSON.stringify(coursesToSave)
    );


    this.itemsToDelete = [];


    // Close modal
    this.closeModal();
  }



  openModal(): void {

    this.isModalOpen = true;
  }


  closeModal(): void {

    this.isModalOpen = false;
  }



  onOverlayClick(event: MouseEvent): void {

    const target = event.target as HTMLElement;

    if (target.classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

}
