import {Component} from "@angular/core";
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

  public message: string;

  public init(config: BdTemplateData): void {
    this.message = config.data.message;
  }
}


export class BdSampleData implements BdTemplateData {
  public type: string = 'SampleData';
  public data: { message?: string };

  constructor(message: string) {
    this.data = {
      message: message
    };
  }
}
