import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBasicHighligh]'
})
export class BasicHighlightDirective implements OnInit {
  @HostBinding('style.color')
  color: string;

  @Input()defaultColor: string = '#007bff';
  @Input() highlightColor: string = '#8300ff';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    console.log('mouse entered');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#8300ff');
    this.color = this.highlightColor;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#007bff');
    this.color = this.defaultColor;
  }

  @HostListener('click') click(eventDate) {
    this.color = '#00ff00';
  }

}
