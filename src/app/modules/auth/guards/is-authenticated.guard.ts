import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

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
    if (isLoggedIn) return true;

    // unauthenticated
    this.router.navigate(['/auth/login'], { queryParams: { redirect_url: state.url } });
    return false;
  }
}