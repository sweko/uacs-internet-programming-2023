import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrl: './enter-name.component.css'
})
export class EnterNameComponent {

  @Input()
  label: string = 'Enter your name';

  value: string = '';

  @Output()
  valueChanged = new EventEmitter<string>();

  valueHasChanged() {
    this.valueChanged.emit(this.value);
  }

}
