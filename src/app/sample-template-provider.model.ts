import {BdTemplate, BdTemplateProvider} from "@bindoc/templates";
import {Type} from "@angular/core";
import {BdSampleComponent} from "./sample-template.component";

export class BdSampleTemplateProvider implements BdTemplateProvider {

  public templates: Type<BdTemplate>[] = [BdSampleComponent];

  getTemplates(): Type<BdTemplate> {
    return this.templates[0];
  }
}
