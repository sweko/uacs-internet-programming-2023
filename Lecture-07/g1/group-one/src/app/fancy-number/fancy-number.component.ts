import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fancy-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fancy-number.component.html',
  styleUrl: './fancy-number.component.css'
})
export class FancyNumberComponent implements OnChanges {

  @Input()
  value: number = 0;

  @Input()
  caption: string = '';

  @Output()
  valueChange = new EventEmitter<number>();

  ngOnChanges() {
    console.log(`Fancy Number Component OnChanges ${this.value}`);
  }

  doChange() {
    this.valueChange.emit(this.value);
  }
}
