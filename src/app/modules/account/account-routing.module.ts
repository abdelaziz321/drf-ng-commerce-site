import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

const routes: Routes = [
  {
    path: 'update-password',
    component: UpdatePasswordComponent
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
