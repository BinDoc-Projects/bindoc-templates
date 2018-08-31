"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var template_factory_component_1 = require("./template-factory.component");
var template_host_directive_1 = require("./template-host.directive");
var template_component_1 = require("./template.component");
__export(require("./abstract-template.model"));
__export(require("./template-factory.component"));
__export(require("./template-host.directive"));
var BdDynamicTemplateModule = /** @class */ (function () {
    function BdDynamicTemplateModule() {
    }
    BdDynamicTemplateModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                template_factory_component_1.BdDynamicTemplateFactoryComponent,
                template_component_1.BdDynamicTemplateComponent,
                template_host_directive_1.BdTemplateHostDirective
            ],
            exports: [
                template_factory_component_1.BdDynamicTemplateFactoryComponent,
                template_component_1.BdDynamicTemplateComponent,
                template_host_directive_1.BdTemplateHostDirective
            ],
            providers: []
        })
    ], BdDynamicTemplateModule);
    return BdDynamicTemplateModule;
}());
exports.BdDynamicTemplateModule = BdDynamicTemplateModule;
//# sourceMappingURL=dynamic.module.js.map