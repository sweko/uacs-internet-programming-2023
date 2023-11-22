import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBright]',
  standalone: true
})
export class BrightDirective {

  @Input() hlColor: string = '#00fdff';
  @Input() hlClass: string = '';

  constructor(private element: ElementRef) {
    console.log('BrightDirective created');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.hlColor, this.hlClass);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string | null, cssClass: string | null) {
    this.element.nativeElement.style.backgroundColor = color;
    if (cssClass) {
      this.element.nativeElement.classList.add(cssClass);
    } else {
      this.element.nativeElement.classList.remove(this.hlClass);
    }
  }

}
