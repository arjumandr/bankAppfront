import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authHeader!: HttpHeaders;
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.authHeader = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    const basicAuth = btoa(username + ':' + password);

    localStorage.setItem('auth', basicAuth);

    return this.http.get(this.baseUrl + '/v1/accounts', {
      headers: {
        Authorization: basicAuth
      }
    });
    // return this.http.get(this.baseUrl + '/v1/accounts');

  }

  logout() {
    localStorage.removeItem('auth');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth');
  }

  getAuthHeader() {
    return this.authHeader;
  }
}
