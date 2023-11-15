import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
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
  name: string = 'Fancy Number';

  @Output()
  valueChange = new EventEmitter<number>();

  ngOnChanges(): void {
    console.log('Fancy Number ngOnChanges');
  }

  doChange() {
    this.valueChange.emit(this.value);
  }
}
