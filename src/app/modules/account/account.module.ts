import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';


@NgModule({
  declarations: [
    UpdateProfileComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
