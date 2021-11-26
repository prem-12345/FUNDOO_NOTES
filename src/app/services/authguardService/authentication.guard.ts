import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  constructor(private AuthguardService: AuthguardServiceService, private router: Router) {}
  canActivate(): boolean {  
    if (!this.AuthguardService.gettoken()) {  
        this.router.navigate(['login']);
        return false;
    }  
    return this.AuthguardService.gettoken();  
}  
  
}
