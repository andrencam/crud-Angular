import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit { //pode ser usado OnChange - quanso houver mudança
  @Input("myForEm") numbers: number[];
  
  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number })
    }
  }
}
