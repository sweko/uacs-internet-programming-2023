import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css'
})
export class SelectFilterComponent {
  @Input() options: string[] = [];
  @Input() title: string = '';

  @Output() selected: string = '';


}
