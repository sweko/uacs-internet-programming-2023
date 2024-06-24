import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  @Input()
  id: string = "0";

  @Input()
  name: string = 'Angular';

  title = 'First Component';

  changeTitle() {
    this.title = 'Title Changed';
  }

}
