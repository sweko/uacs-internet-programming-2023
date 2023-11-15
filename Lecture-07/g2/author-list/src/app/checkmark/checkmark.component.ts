import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CheckmarkMode = 'text' | 'glyph';

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
  mode: CheckmarkMode = 'text';

  isTextMode(): boolean {
    return this.mode === 'text';
  }

  isGlyphMode(): boolean {
    return this.mode === 'glyph';
  }
}
