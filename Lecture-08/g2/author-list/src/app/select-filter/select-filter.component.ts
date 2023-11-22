import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css'
})
export class SelectFilterComponent {

  @Input()
  options: string[] = [];

  @Input()
  title: string = '';

}
