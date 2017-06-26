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
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
let Timer = class Timer {
    constructor() {
        this.timer = 0;
        this.start = Observable_1.Observable.timer(0, 1000);
        this.subjectName = "";
    }
    ngOnInit() {
        this.unSub = this.start.subscribe(t => this.timer = t);
        console.log("nume  " + this.id);
    }
    kill(status) {
        if (status == "true") {
            this.unSub.unsubscribe();
        }
        else if (status == "false") {
            this.unSub = this.start.subscribe(t => this.timer = t);
        }
    }
    clear() {
        this.subjectName = "";
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Timer.prototype, "id", void 0);
Timer = __decorate([
    core_1.Component({
        selector: 'NgTimer',
        templateUrl: '/Scripts/app/timer/timer.html',
        encapsulation: core_1.ViewEncapsulation.None
    })
], Timer);
exports.Timer = Timer;
//# sourceMappingURL=timer.component.js.map