import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private router: Router) { }

  redirectTo(url: string): void {
    // When skipLocationChange true, navigates without pushing a new state into history.
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate([url]);
    });
  }
  
}
