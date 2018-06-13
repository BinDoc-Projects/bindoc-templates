import {Component, ComponentFactoryResolver, Input, OnChanges, Type, ViewChild} from '@angular/core';
import {BdTemplate, BdTemplateData} from './abstract-template.model';
import {BdTemplateHostDirective} from './template-host.directive';

@Component({
  selector: 'bd-dynamic-template',
  template: `
    <div template-host></div>
  `
})
export class BdDynamicTemplateComponent implements OnChanges {

  @Input() template: Type<BdTemplate>;
  @Input() data: BdTemplateData;

  @ViewChild(BdTemplateHostDirective) eTemplateHost: BdTemplateHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  ngOnChanges(changes: any): void {
    if(changes.template || changes.data) {
      this.loadTemplate();
    }
  }

  public loadTemplate() {
    let component = this.componentFactoryResolver.resolveComponentFactory(this.template);
    this.eTemplateHost.viewContainerRef.clear();
    let componentRef = this.eTemplateHost.viewContainerRef.createComponent(component);

    componentRef.instance.init(this.data);
  }
}
