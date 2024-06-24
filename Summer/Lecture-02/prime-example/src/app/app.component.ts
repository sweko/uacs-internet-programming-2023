import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prime-example';

  ime: string = '';
  prezime: string = '';

  setFirstName(name: string) {
    this.ime = name;
  }

  setLastName(name: string) {
    this.prezime = name;
  }
}
