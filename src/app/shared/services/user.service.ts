import { Injectable } from '@angular/core';

export interface UserProfile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  bio: string;
  avatarUrl: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserProfile = {
    firstName: 'Youssef',
    lastName: 'Hegazy',
    username: 'Youssef.codes',
    email: 'Youssef9@devora.io',
    bio: 'Frontend learner building toward a career switch into web development.',
    avatarUrl: null
  };

  getUser(): UserProfile {
    return this.user;
  }

  updateUser(data: Partial<UserProfile>): void {
    this.user = {
      ...this.user,
      ...data
    };
  }
}