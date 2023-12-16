import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'group-two';

  navbarItems = [
    { title: 'Home', path: 'home' },
    { title: 'About', path: 'about' },
    { title: 'Scifi books', path: 'books/scifi' },
    { title: 'Fantasy books', path: 'books/fantasy' },
  ];
}
