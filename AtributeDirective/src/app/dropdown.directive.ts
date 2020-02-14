import { Directive } from '@angular/core';
import {HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.open') isOpen = false;

   @HostListener('click') toggleDropdown() {
     this.isOpen = !this.isOpen;
   }
 
}
