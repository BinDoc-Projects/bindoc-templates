import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from "@angular/core";
import {BdTemplateHostDirective} from "./template-host.directive";
import {BdTemplate, BdTemplateData} from "./abstract-template.model";
import {BdTemplateProvider} from "./template-provider.model";

@Component({
  selector: 'bd-dynamic-template-factory',
  template: `
    <div template-host></div>
  `,
  styles: [`
  
  `]
})
export class BdDynamicTemplateFactoryComponent implements OnInit {

  @Input() data: BdTemplateData;
  @Input() templateProvider: BdTemplateProvider;

  @ViewChild(BdTemplateHostDirective) eTemplateHost: BdTemplateHostDirective;

  templates: Type<BdTemplate>[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.templates = this.templateProvider.getTemplates();
    this.loadTemplate()
  }

  public loadTemplate() {
    let templateType = this.getEventTemplate(this.data.type);

    let component = this.componentFactoryResolver.resolveComponentFactory(templateType);
    this.eTemplateHost.viewContainerRef.clear();
    let componentRef = this.eTemplateHost.viewContainerRef.createComponent(component);

    componentRef.instance['data'] = this.data;
  }

  private getEventTemplate(eventType: string): Type<BdTemplate> {
    let results = this.templates.filter((element: Type<BdTemplate>) => element['type'] === eventType );

    return results[0];
  }
}
