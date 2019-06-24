import { Directive, OnInit, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;
  @HostBinding('style.fontSize') myFontSize:string;

  constructor() { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundColor = 'blue';
    this.myFontSize = '74px';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = 'transparent';
    this.myFontSize = '22px';
  }

}
