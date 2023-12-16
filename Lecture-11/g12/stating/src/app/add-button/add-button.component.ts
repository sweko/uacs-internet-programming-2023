import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatexService } from '../state/statex.service';
import { incrementAction } from '../state/actions';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  constructor(private stateService: StatexService) {}

  add() {
    const action = incrementAction();
    this.stateService.dispatch(action);

    //const incrementedValue = state.value + 1;
    // this.stateService.setState({
    //   value: incrementedValue
    // });
  }
}
