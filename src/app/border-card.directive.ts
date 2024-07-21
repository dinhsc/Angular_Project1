import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[BorderCard]' // on peut personnaliser le nom ou garder app...
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { // el : élément du DOM
    this.setStyle();
    this.setInitBorder('#b4b4b2');

  } 

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#FFD700');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setInitBorder('#b4b4b2');
  }

  setStyle() {
    this.el.nativeElement.style.padding = '10px';
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.marginTop = '30px';
    this.el.nativeElement.style.marginBottom = '30px';
  }

  setInitBorder(color: string) {
    this.el.nativeElement.style.border = `1px solid ${color}`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }

}
