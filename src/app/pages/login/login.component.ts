import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: '',
  };
  router = inject(Router);

  onLogin() {
    if (
      this.loginObj.userName === 'admin' &&
      this.loginObj.password === '1112233'
    ) {
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Wrong Credentials');
    }
  }
}
