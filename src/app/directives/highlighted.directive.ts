import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {
  @Input('highlighted')
  isHighlighted = false;

  constructor() { 
    console.log("directive applied")
  }

  @HostBinding('class.highlighted')
  get cssClass(){
    return this.isHighlighted;
  }
}
