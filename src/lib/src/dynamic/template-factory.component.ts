import {Component, Input, OnInit, Type} from "@angular/core";
import {BdTemplate, BdTemplateData} from "./abstract-template.model";
import {BdTemplateProvider} from "./template-provider.model";

@Component({
  selector: 'bd-dynamic-template-factory',
  template: `
    <bd-dynamic-template  [data]="data"
                          [template]="template">
    </bd-dynamic-template>
  `
})
export class BdDynamicTemplateFactoryComponent implements OnInit {

  @Input() data: BdTemplateData;
  @Input() templateProvider: BdTemplateProvider;

  public template: Type<BdTemplate>;

  ngOnInit() {
    this.template = this.templateProvider.getTemplates(this.data.type);
  }


}
