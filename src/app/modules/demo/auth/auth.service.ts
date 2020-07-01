import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor() {}

  login(): void {
    this.isLoggedIn = true;
    console.log('Logged in!');
  }

  logout(): void {
    this.isLoggedIn = false;
    console.log('Logged out!');
  }
}
