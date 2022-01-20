import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/auth/services/auth.service';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LoginRequestDto } from '../../dto/LoginRequest.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  isFormLoading : boolean = false;
  alertMessage : string | undefined;
  loginRequestDto : LoginRequestDto = { email: '', password: '' };

  fields : FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'email',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        attributes: {
          autocomplete: 'on',
        }
      },
      validators: {
        validation: ['email']
      }
    },
    {
      key: 'password',
      type: 'password',
      templateOptions: {
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
      }
    }
  ];

  constructor(
    private router : Router,
    private authService : AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  async login(event: Event, loginRequestDto: LoginRequestDto) {
    event.preventDefault();
    if (!this.form.valid) return;
    
    this.isFormLoading = true;
    
    this.authService.login(loginRequestDto)
      .subscribe(
        // success
        (response) => {
          const redirectUrl = this.route.snapshot.queryParams['redirect_url'] || '/';
          this.router.navigateByUrl(redirectUrl);
        },
        // error
        (response) => {
          // show server message
          if (response?.error?.message !== null) {
            this.alertMessage = response?.error?.message
          }

          // show server validation errors
          if (response.status = 422) {
            const errors = response.error.errors;

            for (const key in errors) {
              this.form.get(key)?.setErrors({
                server: { message: errors[key][0] },
              });

              // WORKAROUND: without these 2 lines: the server validation messages will not shown up
              const field = this.fields.find((field) => field.key == key);
              if (field) field.focus = true;
            }
          }
        }
      )
      // finally
      .add(() => {
        this.isFormLoading = false;
      });
  }
}
