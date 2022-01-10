import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/auth/services/auth.service';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
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
        maxLength: 5,
      }
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  login(event : Event,model : object) {
    console.log(model);
  }
}
