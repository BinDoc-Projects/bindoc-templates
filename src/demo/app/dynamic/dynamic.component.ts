import {Component, ComponentRef, Type} from '@angular/core';
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
    <button (click)="setSampleData(1)">
      <span>Set Template 1</span>
    </button>
    <button (click)="setSampleData(2)">
      <span>Set Template 2</span>
    </button>
    <bd-dynamic-template  [data]="sampleData" 
                          [template]="sampleTemplate" 
                          (templateChange)="onTemplateChange($event)">
    </bd-dynamic-template>
  `,
  styles: [`
  
  `]
})
export class BdDynamicTemplateDemoComponent {

  public sampleData: BdSampleData = new BdSampleData('Some distinct sample data added through extension class');
  public sampleTemplateProvider: BdSampleTemplateProvider = new BdSampleTemplateProvider();
  public sampleTemplate: Type<BdTemplate> = BdSampleComponent;

  public onTemplateChange(event: ComponentRef<BdTemplate>) {
    console.log(event)
  }

  public setSampleData(type: number) {
    if(type === 1) {
      this.sampleData = new BdSampleData('TemplateData 1 active');
    } else {
      this.sampleData = new BdSampleData('TemplateData 2 active');
    }
  }
}
