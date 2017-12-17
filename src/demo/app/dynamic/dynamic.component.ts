import {Component} from "@angular/core";
import {BdSampleData} from "./sample-template.component";
import {BdSampleTemplateProvider} from "./sample-template-provider.model";

@Component({
  selector: '',
  template: `
    <bd-dynamic-template-factory  [data]="sampleData"
                                  [templateProvider]="sampleTemplateProvider">
    </bd-dynamic-template-factory>
  `,
  styles: [`
  
  `]
})
export class BdDynamicTemplateDemoComponent {

  public sampleData: BdSampleData = new BdSampleData('Some distinct sample data added through extension class');
  public sampleTemplateProvider: BdSampleTemplateProvider = new BdSampleTemplateProvider();
}
