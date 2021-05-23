import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostClick]'
})
export class HostClickDirective {
  @Input('appHostClick') fontSize!: string;

  private defaultFontSize = '1rem';
  private isClicked = false;

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, 'display', 'block');
  }

  @HostListener('click')
  onCLick(): void {
    this.isClicked = !this.isClicked;
    this.handleCLick();
  }

  private handleCLick(): void {
    this.render.setStyle(this.el.nativeElement, 'font-size', this.isClicked ? this.fontSize : this.defaultFontSize);
  }

}
