# @bindoc/templates

Provides an easy way for dynamically creating components by data in angular apps.

## Usage 

For complete sources see: [Demo Code](https://github.com/BinDoc-UG/bindoc-templates/tree/master/src/demo);

### BdTemplate

 - `BdTemplate.type` is used to match templates given by `TemplateProvide`
 - `BdTemplate.init(config: BdTemplateData)` is used to initialize the provided data object to fill the component custom fields.

```typescript
  // custom template implementation 
  
  import {Component} from "@angular/core";
  import {BdTemplate, BdTemplateData} from "@bindoc/templates";
  
  @Component({
    template: `
      <h1>Some template</h1>
      <span>{{message}}</span>
    `
  })
  export class SampleComponent extends BdTemplate {  
    public message: string;
     
    public init(config: BdTemplateData): void {
      this.message = config.data.message;
    }
  }
  
``` 

### Insert by BdTemplate


```typescript
  // data class for sample template
  
  import {BdTemplateData} from "@bindoc/templates";
  
  export class SampleData implements BdTemplateData {
    
    public type: string = 'SampleData';
    public data: { message?: string };
  
    constructor(message: string) {
      this.data = { message: message };
    }
  }
  
  
  
  // demo.component.ts 
  
  import {Component, Type} from "@angular/core";
  import {BdTemplate} from "@bindoc/templates";
  import {SampleComponent, SampleData} from "./sample-template.component";
  
  @Component({
    template: `
      <bd-dynamic-template  [data]="sampleData" 
                            [template]="sampleTemplate">
      </bd-dynamic-template>
    `
  })
  export class BdDynamicTemplateDemoComponent {
  
    public sampleData: SampleData = new SampleData('Some distinct sample data added through extension class');
    public sampleTemplate: Type<BdTemplate> = SampleComponent;
  }

``` 

### Insert by BdTemplateProvider


- `BdTemplateProvider.getTemplates()` provides an array of all possible templates.  

```typescript
  
  import {BdTemplate, BdTemplateProvider} from "@bindoc/templates";
  import {Type} from "@angular/core";
  import {SampleComponent} from "./sample-template.component";
  
  export class SampleTemplateProvider implements BdTemplateProvider {
  
    public getTemplates(): Type<BdTemplate>[] {
      return [SampleComponent];
    }
  }

``` 

After setting up templates and a template provider the templates can be inserted into views.
For filling a template with dynamic content a data class is needed. 

- `BdTemplateData.type` the type is used to match against templates type.

```typescript
  // data class for sample template
  import {BdTemplateData} from "@bindoc/templates";

  export class SampleData implements BdTemplateData {
    
    public type: string = 'SampleData';
  
    constructor(public message: string) {
  
    }
  }
  
  
  
  // demo.component.ts 
  
  import {Component} from "@angular/core";
  import {SampleData} from "./sample-template.component";
  import {SampleTemplateProvider} from "./sample-template-provider.model";
  
  @Component({
    template: `
      <bd-dynamic-template-factory  [data]="sampleData"
                                    [templateProvider]="sampleTemplateProvider">
      </bd-dynamic-template-factory>
    `
  })
  export class BdDynamicTemplateDemoComponent {
  
    public sampleData: SampleData = new SampleData('Some distinct sample data added through extension class');
    public sampleTemplateProvider: SampleTemplateProvider = new SampleTemplateProvider();
  }

``` 
