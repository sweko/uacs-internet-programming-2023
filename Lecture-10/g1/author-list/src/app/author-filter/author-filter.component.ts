import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-filter',
  templateUrl: './author-filter.component.html',
  styleUrl: './author-filter.component.css'
})
export class AuthorFilterComponent {
  @Input() nationalities: string[] = [];

  getYesNoOptions(): string[] {
    return ['Yes', 'No'];
  }

}
