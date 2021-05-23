import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class')
  attrClass = 'highlight';

  @HostListener('mouseenter', ['$event'])
  enter(event: Event): void {
    this.attrClass = 'highlight highlight-active';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void {
    this.attrClass = 'highlight';
  }

}
