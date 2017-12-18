import {Component, Type} from "@angular/core";
import {BdSampleComponent, BdSampleData} from "./sample-template.component";
import {BdSampleTemplateProvider} from "./sample-template-provider.model";
import {BdTemplate} from "templates";

@Component({
  selector: '',
  template: `
    <h1>Template Factory</h1>
    <bd-dynamic-template-factory  [data]="sampleData"
                                  [templateProvider]="sampleTemplateProvider">
    </bd-dynamic-template-factory>
    <hr>
    <h1>Template</h1>
    <bd-dynamic-template  [data]="sampleData" 
                          [template]="sampleTemplate">
    </bd-dynamic-template>
  `,
  styles: [`
  
  `]
})
export class BdDynamicTemplateDemoComponent {

  public sampleData: BdSampleData = new BdSampleData('Some distinct sample data added through extension class');
  public sampleTemplateProvider: BdSampleTemplateProvider = new BdSampleTemplateProvider();
  public sampleTemplate: Type<BdTemplate> = BdSampleComponent;
}
