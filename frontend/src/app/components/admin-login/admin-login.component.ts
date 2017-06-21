import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [ AuthService ]
})
export class AdminLoginComponent {
  login: string;
  password: string;
  showErrorMessage: boolean;

  constructor(private router: Router, private authService: AuthService) {
      this.showErrorMessage = false;
  }

  loginListener(): any {
      this.authService.login(this.login, this.password).subscribe(
          data => { sessionStorage.setItem("authToken", data.token); this.router.navigate(['/admin/create/style']) },
          error => { this.showErrorMessage = true },
          () => {}
      )
  }
}
