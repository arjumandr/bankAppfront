import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule]
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    console.log("Login clicked");  // 👈 add this

    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/accounts']);
      },
      error: () => {
        this.error = "Invalid credentials";
      }
    });
  }
}
