import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export default class TokenGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {

      if(!sessionStorage.getItem("authToken")) {
          this.router.navigate(['/admin/login']);
          return false;
      }

      return true;
  }

}
