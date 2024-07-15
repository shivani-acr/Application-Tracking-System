import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }
  isAuthenticated = false;
  login(username: string, password: string):boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }
}
