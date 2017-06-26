"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const timer_component_1 = require("./timer.component");
const listValues_component_1 = require("./listValues/listValues.component");
let TimerComponentModule = class TimerComponentModule {
};
TimerComponentModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [timer_component_1.Timer, listValues_component_1.ListValues],
        exports: [timer_component_1.Timer],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], TimerComponentModule);
exports.TimerComponentModule = TimerComponentModule;
//# sourceMappingURL=timer.module.js.map