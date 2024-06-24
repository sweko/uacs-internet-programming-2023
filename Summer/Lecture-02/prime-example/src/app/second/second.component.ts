import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  @Input()
  firstName: string = 'John';

  @Input()
  lastName: string = 'Doe';

  fullName: string = '';

  sayName() {
    this.fullName =  `My name is ${this.firstName} ${this.lastName}`;
  }
}
