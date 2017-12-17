import {BdTemplate, BdTemplateProvider} from "templates";
import {Type} from "@angular/core";
import {BdSampleComponent} from "./sample-template.component";

export class BdSampleTemplateProvider implements BdTemplateProvider {

  getTemplates(): Type<BdTemplate>[] {
    return [BdSampleComponent];
  }
}
