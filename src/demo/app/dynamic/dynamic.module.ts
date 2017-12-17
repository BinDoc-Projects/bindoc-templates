import {NgModule} from "@angular/core";
import {BdDynamicTemplateDemoComponent} from "./dynamic.component";
import {RouterModule} from "@angular/router";
import {BdDynamicTemplateModule} from "templates";
import {BdSampleComponent} from "./sample-template.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dynamic', component: BdDynamicTemplateDemoComponent }
    ]),
    BdDynamicTemplateModule
  ],
  declarations: [
    BdDynamicTemplateDemoComponent,
    BdSampleComponent
  ],
  exports: [
    RouterModule,
    BdDynamicTemplateDemoComponent,
    BdSampleComponent
  ],
  providers: [],
  entryComponents: [
    BdSampleComponent
  ]
})
export class BdDynamicTemplateDemoModule {

}
