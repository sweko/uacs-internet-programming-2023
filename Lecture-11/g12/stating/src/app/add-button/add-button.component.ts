import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatexService } from '../statex.service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  @Input() value: number = 0;
  @Output() clicked: EventEmitter<number> = new EventEmitter()

  constructor(private stateService: StatexService) {}

  add() {
    this.clicked.emit(this.value + 1);
    const state = this.stateService.getState();
    const incrementedValue = state.value + 1;
    this.stateService.setState({
      value: incrementedValue
    });
  }
}
