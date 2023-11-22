import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() hlColor: string = 'yellow';
  @Input() hlClass: string = '';

  constructor(private el: ElementRef) {
    //console.log('HighlightDirective constructor called');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.hlColor, this.hlClass);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string | null, cssClass?: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
    if (cssClass) {
      this.el.nativeElement.classList.add(cssClass);
    } else {
      this.el.nativeElement.classList.remove(this.hlClass);
    }
  }

}
