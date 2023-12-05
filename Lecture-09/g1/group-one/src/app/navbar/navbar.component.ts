import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  routes = [
    { linkName: 'Home', url: '/home' },
    { linkName: 'About', url: '/about' },
    { linkName: 'Random', url: '/random' }
  ];
}
