import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
