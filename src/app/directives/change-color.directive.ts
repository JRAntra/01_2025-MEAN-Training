import { Directive,HostBinding,HostListener,Renderer2,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: false
})
export class ChangeColorDirective {

  // @HostBinding('style.backgroundColor') backgroundColor : string = "yellow";

  constructor(private renderer : Renderer2, private el:ElementRef) { }

  @HostListener('mouseenter') onHover(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','green')
    // this.backgroundColor = 'green'
  }
  @HostListener('mouseleave') onLeave(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red')

  }

}
