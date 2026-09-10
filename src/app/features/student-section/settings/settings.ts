import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../../shared/sidebar/sidebar';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent {

  @ViewChild('photoInput')
  photoInput!: ElementRef<HTMLInputElement>;

  firstName = '';
  lastName = '';
  username = '';
  email = '';
  bio = '';
  avatarUrl: string | null = null;

  savedBannerVisible = false;

  private savedBannerTimer: ReturnType<typeof setTimeout> | null = null;

  private snapshot!: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    bio: string;
    avatarUrl: string | null;
  };

  constructor(private userService: UserService) {

    const user = this.userService.getUser();

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.email = user.email;
    this.bio = user.bio;
    this.avatarUrl = user.avatarUrl;

    this.snapshot = this.takeSnapshot();
  }

  get initials(): string {
    return `${this.firstName[0] ?? ''}${this.lastName[0] ?? ''}`.toUpperCase();
  }

  onChangePhotoClick(): void {
    this.photoInput?.nativeElement.click();
  }

  onPhotoSelected(event: Event): void {

    const file = (event.target as HTMLInputElement).files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.avatarUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  onCancel(): void {

    const snap = this.snapshot;

    this.firstName = snap.firstName;
    this.lastName = snap.lastName;
    this.username = snap.username;
    this.email = snap.email;
    this.bio = snap.bio;
    this.avatarUrl = snap.avatarUrl;
  }

  onSubmit(): void {

    this.userService.updateUser({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      bio: this.bio,
      avatarUrl: this.avatarUrl
    });

    this.snapshot = this.takeSnapshot();

    this.savedBannerVisible = true;

    if (this.savedBannerTimer) {
      clearTimeout(this.savedBannerTimer);
    }

    this.savedBannerTimer = setTimeout(() => {
      this.savedBannerVisible = false;
    }, 2500);
  }

  private takeSnapshot() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      bio: this.bio,
      avatarUrl: this.avatarUrl
    };
  }
}
