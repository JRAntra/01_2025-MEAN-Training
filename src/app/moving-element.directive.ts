import { Directive, HostListener, Renderer2,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMovingElement]',
  standalone: false
})
export class MovingElementDirective {

  constructor(private renderer: Renderer2,private el: ElementRef) { }

  @HostListener("click") movePosition(){
    let y = Math.random()*100
    let x = Math.random()*100
    this.renderer.setStyle(this.el.nativeElement,'position','fixed')
    this.renderer.setStyle(this.el.nativeElement,'left',`${y}vw`)
    this.renderer.setStyle(this.el.nativeElement,'top',`${x}vh`)
   }

}
