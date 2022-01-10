import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(use : any) {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}