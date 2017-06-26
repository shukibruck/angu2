"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    }
    kill(status) {
        if (status == "true") {
            console.log(status);
            this.unSub.unsubscribe();
        }
        else if (status == "false") {
            console.log(status);
            this.unSub = this.start.subscribe(t => this.timer = t);
        }
        console.log(this.subjectName);
    }
    clear() {
        this.subjectName = "";
    }
};
Timer = __decorate([
    core_1.Component({
        selector: 'NgTimer',
        templateUrl: '/Scripts/app/timer/timer.html',
        encapsulation: core_1.ViewEncapsulation.None
    })
], Timer);
exports.Timer = Timer;
//# sourceMappingURL=timer.component.js.map