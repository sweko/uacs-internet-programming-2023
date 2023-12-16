import { Component } from '@angular/core';
import { StatexService } from '../state/statex.service';
import { decrementAction } from '../state/actions';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrl: './subtract-button.component.css'
})
export class SubtractButtonComponent {

  constructor(private stateService: StatexService) {}

  subtract() {
    const action = decrementAction();
    this.stateService.dispatch(action);
  }

}
