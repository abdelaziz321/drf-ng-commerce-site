import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  declarations: [
    NavbarComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ClickOutsideModule
  ],
  exports: [
    NavbarComponent,
    AppFooterComponent
  ]
})
export class SharedModule { }
