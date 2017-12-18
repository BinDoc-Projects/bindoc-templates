import {Type} from "@angular/core";
import {BdTemplate} from "./abstract-template.model";

export interface BdTemplateProvider {
  templates: Type<BdTemplate>[]

  getTemplates(type: string): Type<BdTemplate>;
}
