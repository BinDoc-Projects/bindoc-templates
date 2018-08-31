import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[template-host]'
})
export class BdTemplateHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {

  }
}
