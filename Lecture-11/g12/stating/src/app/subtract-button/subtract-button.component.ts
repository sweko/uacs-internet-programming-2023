import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatexService } from '../statex.service';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrl: './subtract-button.component.css'
})
export class SubtractButtonComponent {
  @Input() value: number = 0;
  @Output() clicked: EventEmitter<number> = new EventEmitter()

  constructor(private stateService: StatexService) {}

  subtract() {
    this.clicked.emit(this.value - 1);
    const state = this.stateService.getState();
    const decrementedValue = state.value - 1;
    this.stateService.setState({
      value: decrementedValue
    });
  }

}
