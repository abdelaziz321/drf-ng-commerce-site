import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../..';
import { RegisterRequestDto } from '../../dto/RegisterRequest.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isFormLoading: boolean = false;
  alertMessage: string | undefined;
  registerRequestDto: RegisterRequestDto = { name: '', email: '', password: '' };

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your fullname',
        required: true,
        attributes: {
          autocomplete: 'on',
        }
      }
    },
    {
      key: 'email',
      type: 'email',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter your email address',
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
    },
    {
      key: 'avatar',
      type: 'file',
      templateOptions: {
        label: 'Avatar',
        placeholder: 'upload avatar',
        required: true,
      }
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  async register(event: Event, registerRequestDto : RegisterRequestDto) {
    event.preventDefault();
    
    if (!this.form.valid) return;

    this.isFormLoading = true;

    this.authService.register(registerRequestDto)
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
