import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './components/page/page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GlobalModule { }
