import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { class: 'flex flex-col h-screen' }
})
export class AppComponent {
  title = 'drf-ng-commerce-site';
}
