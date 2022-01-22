import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsGuestGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService : AuthService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Promise<boolean>
  {
    const isLoggedIn = await this.authService.isLoggedIn();

    // authenticated
    if (!isLoggedIn) return true;

    // unauthenticated
    this.router.navigate(['/']);
    return false;
  }
}