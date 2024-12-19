import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {
  visible = false;

  constructor(private templateRef: TemplateRef<any>,
    private ViewContainer: ViewContainerRef
  ) { }


  @Input()
  set ngxUngless (condition:boolean){
    if (!condition && !this.visible){
      this.ViewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    }else if(condition && this.visible){
      this.ViewContainer.clear();
      this.visible = false
    }
  }
}
