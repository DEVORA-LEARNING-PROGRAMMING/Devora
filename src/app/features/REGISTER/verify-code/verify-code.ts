import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './verify-code.html',
  styleUrls: ['./verify-code.css']
})
export class VerifyCodeComponent implements OnInit, OnDestroy {

  code = '';

  errors: {
    code?: string;
  } = {};

  remainingTime = 30;

  resendDisabled = true;

  private timer: any = null;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private stopTimer(): void {

    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

  }

  startTimer(): void {

    this.stopTimer();

    this.remainingTime = 30;
    this.resendDisabled = true;

    this.cdr.detectChanges();

    this.ngZone.runOutsideAngular(() => {

      this.timer = setInterval(() => {

        this.ngZone.run(() => {

          this.remainingTime--;

          if (this.remainingTime <= 0) {

            this.remainingTime = 0;
            this.resendDisabled = false;

            this.stopTimer();
          }

          this.cdr.detectChanges();

        });

      }, 1000);

    });
  }

  onResend(): void {

    if (this.resendDisabled) {
      return;
    }

    console.log('Code resent');

    this.startTimer();
  }

  onSubmit(): void {

    this.errors = {};

    if (!/^\d{6}$/.test(this.code.trim())) {

      this.errors.code =
        'Enter the 6-digit code we sent you.';

      return;
    }

    this.router.navigate(['/register/signin'], {
      queryParams: {
        verified: 1
      }
    });
  }
}
