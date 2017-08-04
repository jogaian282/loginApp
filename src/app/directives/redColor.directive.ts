import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})

export class RedColorDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') c_colorrr = "red"; 

  @HostListener('mouseenter') c_onEnterrr() {
   this.c_colorrr= "blue" ;
  }

  @HostListener('mouseleave') c_onLeaveee() {
   this.c_colorrr = "yellow" ;
  }

}