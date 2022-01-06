import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { GlobalModule } from './modules/global/global.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule, // router
    SharedModule,     // navbar / footer / ...shared components
    GlobalModule      // 404 / 403 / contact-us / ...static pages
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
