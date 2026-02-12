import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    console.log("Login clicked");

    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        // this.router.navigate(['/accounts']); works
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = "Invalid credentials";
      }
    });
  }
}
