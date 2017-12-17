import {Type} from "@angular/core";
import {BdTemplate} from "./abstract-template.model";

export interface BdTemplateProvider {
  getTemplates(): Type<BdTemplate>[];
}
