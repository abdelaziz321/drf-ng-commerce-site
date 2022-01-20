import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTypeComponent } from './formly-field-type/formly-field-type.component';
import { FormlyFieldWrapperComponent } from './formly-field-wrapper/formly-field-wrapper.component';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    FormlyFieldTypeComponent,
    FormlyFieldWrapperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      // basic inputs
      types: [
        {
          name: 'input',
          component: FormlyFieldTypeComponent,
          wrappers: ['wrapper'],
        },
        {
          name: 'password',
          extends: 'input',
          defaultOptions: {
            templateOptions: { type: 'password' },
          }
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          }
        },
        {
          name: 'email',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'email',
            },
          }
        },
      ],

      // wrapper
      wrappers: [
        { name: 'wrapper', component: FormlyFieldWrapperComponent },
      ],

      // messages
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: 'This is not a valid email address' },
      ],

      // validators
      validators: [
        {
          name: 'email',
          validation: function EmailValidator(control: AbstractControl): ValidationErrors | null {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) ? {} : { 'email': true };
          },
        }
      ]
    })
  ]
})
export class AppFormModule { }
