import {Component, Input} from "@angular/core";
import {BdTemplate, BdTemplateData} from "templates";

@Component({
  template: `
    <div>
      <h1>SampleComponent</h1>
      <p>{{message}}</p>
    </div>
  `,
  styles: [``]
})
export class BdSampleComponent extends BdTemplate {

  static type: string = 'SampleData';

  @Input() message: string;

  public setData(data: any): void {
    this.message = data.message;
  }
}


export class BdSampleData implements BdTemplateData {
  public type: string = 'SampleData';

  constructor(
    public message: string
  ) {

  }
}
