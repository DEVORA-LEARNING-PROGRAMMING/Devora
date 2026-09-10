import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  status: 'completed' | 'active' | 'locked';
  content: string[];
  code: string;
}

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lessons.html',
  styleUrl: './lessons.css'
})
export class LessonComponent {
  lessons: Lesson[] = [
    {
      id: 1,
      title: 'What is React?',
      duration: '8 min',
      status: 'completed',
      content: [
        'React is a JavaScript library for building user interfaces.',
        'It allows developers to create large web applications that can change data, without reloading the page.'
      ],
      code: 'const element = <h1>Hello, world!</h1>;'
    },
    {
      id: 2,
      title: 'Environment setup',
      duration: '12 min',
      status: 'completed',
      content: [
        'Setting up a React development environment requires Node.js.',
        'You can use tools like Vite or Create React App to quickstart projects.'
      ],
      code: 'npm create vite@latest my-app -- --template react'
    },
    {
      id: 3,
      title: 'React Fundamentals — Your first component',
      duration: '11 min',
      status: 'active',
      content: [
        'You can create a simple component by defining a function with a capitalized name.',
        'For example, a Profile component can return a heading and a short description.',
        'Components can also be reused multiple times throughout an application. Instead of writing the same UI again and again, you can create a component once and use it wherever you need it.',
        'As your application grows, breaking the interface into smaller components makes the code easier to understand, maintain, and reuse.'
      ],
      code: `function Profile() {\n  return (\n    <div>\n        <h1>John Doe</h1>\n        <p>Frontend Developer</p>\n    </div>\n  );\n}`
    },
    {
      id: 4,
      title: 'useState in depth',
      duration: '14 min',
      status: 'locked',
      content: [
        'State allows React components to change their output over time in response to user actions.',
        'The useState hook is used to declare state variables in functional components.'
      ],
      code: 'const [count, setCount] = useState(0);'
    },
    {
      id: 5,
      title: 'Handling events',
      duration: '10 min',
      status: 'locked',
      content: [
        'Handling events with React elements is very similar to handling events on DOM elements.',
        'React events are named using camelCase, rather than lowercase.'
      ],
      code: '<button onClick={handleClick}>Click me</button>'
    },
    {
      id: 6,
      title: 'lesson whatever',
      duration: '15 min',
      status: 'locked',
      content: ['Content for lesson whatever.'],
      code: '// Code for lesson whatever'
    },
    {
      id: 7,
      title: 'lesson whatever',
      duration: '15 min',
      status: 'locked',
      content: ['Content for lesson whatever.'],
      code: '// Code for lesson whatever'
    },
    {
      id: 8,
      title: 'lesson whatever',
      duration: '15 min',
      status: 'locked',
      content: ['Content for lesson whatever.'],
      code: '// Code for lesson whatever'
    },
    {
      id: 9,
      title: 'lesson whatever',
      duration: '15 min',
      status: 'locked',
      content: ['Content for lesson whatever.'],
      code: '// Code for lesson whatever'
    }
  ];

  get activeLessonIndex(): number {
    return this.lessons.findIndex(l => l.status === 'active');
  }

  get currentLesson(): Lesson {
    return this.lessons[this.activeLessonIndex] || this.lessons[0];
  }

  get completedCount(): number {
    return this.lessons.filter(l => l.status === 'completed').length;
  }

  get progressPercentage(): number {
    return Math.round((this.completedCount / 19) * 100);
  }

  getLessonStatus(index: number): string {
    return this.lessons[index] ? this.lessons[index].status : 'locked';
  }

  getLessonStatusClass(index: number): string {
    const status = this.getLessonStatus(index);
    return status;
  }

  selectLessonByIndex(index: number): void {
    if (this.lessons[index]) {
      this.lessons.forEach((lesson, i) => {
        if (i === index) {
          lesson.status = 'active';
        } else if (lesson.status === 'active') {
          lesson.status = 'completed';
        }
      });
    }
  }

  nextLesson(): void {
    const currentIndex = this.activeLessonIndex;
    if (currentIndex < this.lessons.length - 1) {
      this.lessons[currentIndex].status = 'completed';
      this.lessons[currentIndex + 1].status = 'active';
    }
  }

  previousLesson(): void {
    const currentIndex = this.activeLessonIndex;
    if (currentIndex > 0) {
      this.lessons[currentIndex].status = 'locked';
      this.lessons[currentIndex - 1].status = 'active';
    }
  }
}