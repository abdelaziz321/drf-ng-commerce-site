import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDropdownMenuVisible : boolean = false;
  isMobileMenuVisible : boolean = false;

  // TODO: update this after implementing the auth part
  isAuthenticated : boolean = true;

  constructor() {}
  ngOnInit(): void {}
}
