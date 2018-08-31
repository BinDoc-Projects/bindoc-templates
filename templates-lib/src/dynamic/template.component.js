"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var template_host_directive_1 = require("./template-host.directive");
var BdDynamicTemplateComponent = /** @class */ (function () {
    function BdDynamicTemplateComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    BdDynamicTemplateComponent.prototype.ngOnChanges = function (changes) {
        if (changes.template || changes.data) {
            this.loadTemplate();
        }
    };
    BdDynamicTemplateComponent.prototype.loadTemplate = function () {
        var component = this.componentFactoryResolver.resolveComponentFactory(this.template);
        this.eTemplateHost.viewContainerRef.clear();
        var componentRef = this.eTemplateHost.viewContainerRef.createComponent(component);
        componentRef.instance.init(this.data);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.Type)
    ], BdDynamicTemplateComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BdDynamicTemplateComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild(template_host_directive_1.BdTemplateHostDirective),
        __metadata("design:type", template_host_directive_1.BdTemplateHostDirective)
    ], BdDynamicTemplateComponent.prototype, "eTemplateHost", void 0);
    BdDynamicTemplateComponent = __decorate([
        core_1.Component({
            selector: 'bd-dynamic-template',
            template: "\n    <div template-host></div>\n  "
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], BdDynamicTemplateComponent);
    return BdDynamicTemplateComponent;
}());
exports.BdDynamicTemplateComponent = BdDynamicTemplateComponent;
//# sourceMappingURL=template.component.js.map