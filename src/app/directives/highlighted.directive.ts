import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
  standalone: true
})
export class HighlightedDirective {
  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { 
    console.log("directive applied")
  }

  @HostBinding('class.highlighted')
  get cssClass(){
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver(){
    this.isHighlighted= true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted= false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted)
  }
}
