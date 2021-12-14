import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchAccesoGuard implements CanActivate {

  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let passwordInput = (document.getElementById("password-input") as HTMLInputElement).value;
      if (passwordInput !== 'werfen') {
        this.router.navigate(['']);
        return false;
      }
    return true;
  }
  
}
