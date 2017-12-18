import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from "@angular/core";
import {BdTemplate, BdTemplateData} from "./abstract-template.model";
import {BdTemplateHostDirective} from "./template-host.directive";

@Component({
  selector: 'bd-dynamic-template',
  template: `
    <div template-host></div>
  `,
  styles: [`
  
  `]
})
export class BdDynamicTemplateComponent implements OnInit {

  @Input() template: Type<BdTemplate>;
  @Input() data: BdTemplateData;

  @ViewChild(BdTemplateHostDirective) eTemplateHost: BdTemplateHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  ngOnInit(): void {
    if(this.template) {
      this.loadTemplate(this.template);
    }
  }

  public loadTemplate(template: Type<BdTemplate>) {
    let component = this.componentFactoryResolver.resolveComponentFactory(template);
    this.eTemplateHost.viewContainerRef.clear();
    let componentRef = this.eTemplateHost.viewContainerRef.createComponent(component);

    componentRef.instance.init(this.data);
  }
}
