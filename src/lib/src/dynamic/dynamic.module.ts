import {NgModule} from "@angular/core";
import {BdDynamicTemplateFactoryComponent} from "./template-factory.component";
import {BdTemplateHostDirective} from "./template-host.directive";

export * from './abstract-template.model';
export * from './template-provider.model';
export * from './template-factory.component';
export * from './template-host.directive';

@NgModule({
  imports: [],
  declarations: [
    BdDynamicTemplateFactoryComponent,
    BdTemplateHostDirective
  ],
  exports: [
    BdDynamicTemplateFactoryComponent,
    BdTemplateHostDirective
  ],
  providers: []
})
export class BdDynamicTemplateModule {

}
