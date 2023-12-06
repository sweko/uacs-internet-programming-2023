import { Component, Input } from '@angular/core';

export interface NavbarItem {
  title: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() items: NavbarItem[] = [];
}
