import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string) {
    const token = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('auth', token);
  }

  logout() {
    localStorage.removeItem('auth');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('auth') !== null;
  }
}
