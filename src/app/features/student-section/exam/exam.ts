import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam.html',
  styleUrls: ['./exam.css']
})
export class ExamComponent implements OnInit, OnDestroy {
  questions: Question[] = [
    {
      id: 1,
      type: 'multiple',
      question: 'Which method adds one or more elements to the end of an array and returns the new length?',
      options: ['array.shift()', 'array.push()', 'array.pop()', 'array.slice()'],
      correct: 1,
      explanation: 'array.push() adds one or more elements to the end of an array and returns the new length.'
    },
    {
      id: 2,
      type: 'multiple',
      question: 'Which method removes the last element from an array and returns that element?',
      options: ['array.push()', 'array.pop()', 'array.shift()', 'array.unshift()'],
      correct: 1,
      explanation: 'array.pop() removes the last element from an array and returns that element.'
    },
    {
      id: 3,
      type: 'truefalse',
      question: 'The array.map() method creates a new array with the results of calling a function on every element.',
      options: ['True', 'False'],
      correct: 0,
      explanation: 'True! array.map() returns a new array with transformed elements.'
    },
    {
      id: 4,
      type: 'code',
      question: 'What will be the output of this code?\n\nconst arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);',
      options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'undefined'],
      correct: 1,
      explanation: 'arr.push(4) adds 4 to the end, so output is [1, 2, 3, 4]'
    },
    {
      id: 5,
      type: 'multiple',
      question: 'Which method removes the first element from an array and returns that element?',
      options: ['array.pop()', 'array.push()', 'array.shift()', 'array.unshift()'],
      correct: 2,
      explanation: 'array.shift() removes the first element and returns it.'
    }
  ];

  currentQuestionIndex: number = 0;
  selectedAnswers: { [questionId: number]: number } = {};
  timerInterval: any = null;
  
  
  readonly totalTime: number = 60; 
  timeLeft: number = 60; 
  timerDisplayFormatted: string = '01:00';
  quizSubmitted: boolean = false;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('selectedAnswers');
    if (saved) {
      try {
        this.selectedAnswers = JSON.parse(saved);
      } catch (e) {
        this.selectedAnswers = {};
      }
    }
    
    
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get progressPercentage(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  get isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  get hasSelectedCurrentAnswer(): boolean {
    return this.selectedAnswers[this.currentQuestion.id] !== undefined;
  }

  selectOption(optIndex: number): void {
    this.selectedAnswers[this.currentQuestion.id] = optIndex;
    localStorage.setItem('selectedAnswers', JSON.stringify(this.selectedAnswers));
  }

  isOptionSelected(optIndex: number): boolean {
    return this.selectedAnswers[this.currentQuestion.id] === optIndex;
  }

  goToPrevious(): void {
    if (!this.isFirstQuestion) {
      this.currentQuestionIndex--;
    }
  }

  goToNext(): void {
    if (!this.hasSelectedCurrentAnswer) {
      alert('Please select an answer before proceeding.');
      return;
    }

    if (!this.isLastQuestion) {
      this.currentQuestionIndex++;
    } else {
      this.submitQuiz();
    }
  }

  exitQuiz(): void {
    const confirmExit = confirm('Are you sure you want to exit the quiz?');
    if (confirmExit) {
      this.stopTimer();
      this.router.navigate(['/student/quizes']);
    }
  }

  submitQuiz(): void {
    if (this.quizSubmitted) return;
    this.quizSubmitted = true;
    this.stopTimer();

    let correctCount = 0;
    const finalAnswers: { [questionId: number]: number | null } = {};

   
    this.questions.forEach((q) => {
      const userAnswer = this.selectedAnswers[q.id];

      if (userAnswer !== undefined) {
        finalAnswers[q.id] = userAnswer;
        if (userAnswer === q.correct) {
          correctCount++;
        }
      } else {
        
        finalAnswers[q.id] = null;
      }
    });

    const percentage = Math.round((correctCount / this.questions.length) * 100);
    const passed = percentage >= 60;

    const result = {
      score: correctCount,
      total: this.questions.length,
      percentage: percentage,
      passed: passed,
      answers: finalAnswers,
      timeSpent: this.totalTime - this.timeLeft,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('quizResult', JSON.stringify(result));
    localStorage.removeItem('selectedAnswers');
    this.router.navigate(['/result']);
  }

  startTimer(): void {
    this.updateTimerDisplay();
    this.stopTimer();

    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateTimerDisplay();
      } else {
        this.stopTimer();
        this.submitQuiz(); 
      }
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private updateTimerDisplay(): void {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.timerDisplayFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    
    this.cdr.detectChanges();
  }
}