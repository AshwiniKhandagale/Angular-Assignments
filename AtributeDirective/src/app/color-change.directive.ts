import { Directive , HostListener, HostBinding, Renderer,Renderer2,ElementRef} from '@angular/core';


@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
 // In Angular, the @HostBinding() function decorator allows you to set the properties of the host element from the directive class.
// Let's say you want to change the style properties such as height, width, color, margin, border, etc., or any other internal properties of the host element in the directive class. Here, you'd need to use the @HostBinding() decorator function to access these properties on the host element and assign a value to it in directive class.
// The @HostBinding() decorator takes one parameter, the name of the host element property which value we want to assign in the directive.
 
@HostBinding('style.color') color:string;

  constructor(  
    public el:ElementRef,
    public render : Renderer
    ) { 
  
  }
  // In Angular, the @HostListener() function decorator makes it super easy
  // to handle events raised in the host element inside the directive class

  @HostListener('mouseover') onMouseOver(){
    //this.render.setElementStyle( this.el.nativeElement,'color','red')
    this.color='red'
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.render.setElementStyle(this.el.nativeElement,'color','yellow')
    this.color='yellow'
  }
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.render.setElementStyle(this.el.nativeElement,'color','pink');
  // }

} 
