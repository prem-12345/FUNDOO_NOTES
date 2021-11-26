import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private router: Router) { }

  gettoken() {
    return !!localStorage.getItem("token");
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
