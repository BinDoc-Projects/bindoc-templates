import {NgModule} from "@angular/core";
import {BdDynamicTemplateFactoryComponent} from "./template-factory.component";
import {BdTemplateHostDirective} from "./template-host.directive";
import {BdDynamicTemplateComponent} from "./template.component";

export * from './abstract-template.model';
export * from './template-provider.model';
export * from './template-factory.component';
export * from './template-host.directive';

@NgModule({
  imports: [],
  declarations: [
    BdDynamicTemplateFactoryComponent,
    BdDynamicTemplateComponent,
    BdTemplateHostDirective
  ],
  exports: [
    BdDynamicTemplateFactoryComponent,
    BdDynamicTemplateComponent,
    BdTemplateHostDirective
  ],
  providers: []
})
export class BdDynamicTemplateModule {

}
