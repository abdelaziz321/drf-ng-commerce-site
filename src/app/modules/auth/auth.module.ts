import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormlyModule } from '@ngx-formly/core';
import { AppFormModule } from '@app/modules/shared/components/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormlyModule.forRoot({}),
    AppFormModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
