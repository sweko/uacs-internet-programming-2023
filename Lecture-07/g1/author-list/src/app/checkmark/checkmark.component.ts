import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum CheckmarkMode {
  Text,
  Check
}

@Component({
  selector: 'app-checkmark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkmark.component.html',
  styleUrl: './checkmark.component.css'
})
export class CheckmarkComponent {
  @Input()
  checked = false;

  @Input()
  mode = CheckmarkMode.Text;

  isModeText(): boolean {
    return this.mode === CheckmarkMode.Text;
  }

  isModeCheck(): boolean {
    return this.mode === CheckmarkMode.Check;
  }
}
