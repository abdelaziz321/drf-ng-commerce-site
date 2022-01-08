import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ClickOutsideModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AngularSvgIconModule
  ]
})
export class SharedModule { }
