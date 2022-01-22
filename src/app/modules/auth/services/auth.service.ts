import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '@app/modules/account/models/account.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthUserResponseDto } from '../dto/AuthUserResponse.dto';
import { LoginRequestDto } from '../dto/LoginRequest.dto';
import { tap } from 'rxjs/operators';
import { RegisterRequestDto } from '../dto/RegisterRequest.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * the current account of the authenticated user
   */
  currentAccount : Account | undefined;

  /**
   * get the current access token
   */
  public get currentAccessToken(): string | null {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  /**
   * get the current refresh token
   */
  public get currentRefreshToken() : string | null {
    return localStorage.getItem('REFRESH_TOKEN');
  }

  constructor(private http: HttpClient) { }

  /**
   * register and save ACCESS_TOKEN & REFRESH_TOKEN & currentAccount
   * 
   * @param registerRequestDto
   */
  public register(registerRequestDto: RegisterRequestDto): Observable<any> {
    let payload = new FormData;

    for (const key in registerRequestDto) {
      let value : any = registerRequestDto[key as keyof RegisterRequestDto];

      // use the first file
      if (value instanceof FileList && value.length > 0) {
        value = value[0];
      }

      if (value) payload.append(key, value);
    }

    return this.http.post<AuthUserResponseDto>(
      `${environment.baseUrl}/accounts/auth/register`,
      payload
    )
      .pipe(
        tap((response) => {
          localStorage.setItem('ACCESS_TOKEN', response.tokens.access);
          localStorage.setItem('REFRESH_TOKEN', response.tokens.refresh);
          this.currentAccount = response.user;
        })
      );
  }

  /**
   * login and save ACCESS_TOKEN & REFRESH_TOKEN & currentAccount
   * 
   * @param loginRequestDto
   */
  public login(loginRequestDto: LoginRequestDto) : Observable<any> {
    return this.http.post<AuthUserResponseDto>(
      `${environment.baseUrl}/accounts/auth/login`,
      {
        email: loginRequestDto.email,
        password: loginRequestDto.password
      }
    )
    .pipe(
      tap((response) => {
        localStorage.setItem('ACCESS_TOKEN', response.tokens.access);
        localStorage.setItem('REFRESH_TOKEN', response.tokens.refresh);
        this.currentAccount = response.user;
      })
    );
  }
  
  /**
   * fetch currentAccount
   */
  private async fetchCurrentAccount() : Promise<void> {
    let response = await this.http.get<AuthUserResponseDto>(`${environment.baseUrl}/accounts/auth/me`).toPromise();
    this.currentAccount = response.user;
  }

  /**
   * check if the current user is logged in
   * we'll try to fetch the current account if it's undefined
   */
  public async isLoggedIn() : Promise<boolean> {
    if (this.currentAccessToken === null) return false;

    if (this.currentAccount === undefined) {
      await this.fetchCurrentAccount();
    }

    if (this.currentAccount === undefined) {
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('REFRESH_TOKEN');
      return false;
    }

    return true;
  }

  /**
   * logout and remove all tokens
   */
  public logout() : void {
    this.currentAccount = undefined;
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
  }
}