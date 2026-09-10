import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Course } from '../manage-courses/manage-courses'; // اضبط المسار بحسب مشروعك
import { SidebarComponent } from '../../../shared/sidebar.admin/sidebar.admin';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,SidebarComponent],
  templateUrl: './add-course.html',
  styleUrls: ['./add-course.css']
})
export class AddCourseComponent {
  courseForm: FormGroup;
  previewUrl: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      instructor: ['', Validators.required],
      lesson: ['', Validators.required],
      description: [''],
      time: ['', Validators.required]
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return;
    }

    const formValues = this.courseForm.value;

    const newCourse: Course = {
      id: Date.now(),
      title: formValues.name,
      author: formValues.instructor,
      duration: formValues.time,
      lessonsCount: Number(formValues.lesson) || 0,
      rating: 5.0,
      brandClass: 'custom-bg',
      image: this.previewUrl || undefined
    };

    // جلب البيانات الحالية من localStorage
    const storedCourses = localStorage.getItem('courses');
    const coursesList: Course[] = storedCourses ? JSON.parse(storedCourses) : [];

    // إضافة الكورس الجديد في البداية
    coursesList.unshift(newCourse);

    // إعادة حفظ القائمة المعدلة
    localStorage.setItem('courses', JSON.stringify(coursesList));

    // التوجيه إلى صفحة الكورسات
    this.router.navigate(['/admin/manage-courses']);
  }
}