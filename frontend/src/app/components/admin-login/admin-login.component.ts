import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  login: string;
  password: string;

  constructor(private router: Router) {}

  loginListener(): any {
      if( this.login === "admin" && this.password === "admin1" ) this.router.navigate(['/admin/create/style']);
  }
}
