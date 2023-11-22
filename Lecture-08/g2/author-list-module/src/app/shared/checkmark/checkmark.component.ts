import { Component, Input } from '@angular/core';

export type CheckmarkMode = 'text' | 'glyph';

@Component({
  selector: 'app-checkmark',
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
