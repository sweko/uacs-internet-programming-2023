import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-author-filter',
  standalone: true,
  imports: [CommonModule, SelectFilterComponent],
  templateUrl: './author-filter.component.html',
  styleUrl: './author-filter.component.css'
})
export class AuthorFilterComponent {
  @Input() nationalities: string[] = [];

  getYesNoOptions(): string[] {
    return ['Yes', 'No'];
  }

}
