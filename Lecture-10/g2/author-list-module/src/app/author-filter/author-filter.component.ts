import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-author-filter',
  templateUrl: './author-filter.component.html',
  styleUrl: './author-filter.component.css'
})
export class AuthorFilterComponent {
  getYesNoOptions(): string[] {
    return ['Yes', 'No'];
  }

  namePart: string = '';

  @Input()
  nationalities: string[] = [];

  @Output()
  filterChange: EventEmitter<Filter> = new EventEmitter<Filter>();

  emitFilter() {
    const filter: Filter = {
      namePart: this.namePart,
      nationality: "All",
      alive: "All",
      year: 0
    }
    this.filterChange.emit(filter);
  }


}
