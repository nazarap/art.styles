import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TokenGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {

      if(typeof sessionStorage === "undefined" || !sessionStorage.getItem("authToken")) {
          this.router.navigate(['/admin/login']);
          return false;
      }

      return true;
  }

}
