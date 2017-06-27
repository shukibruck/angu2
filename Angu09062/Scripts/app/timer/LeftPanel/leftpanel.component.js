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
const Http_service_1 = require("../Http.service");
let LeftPanel = class LeftPanel {
    constructor(service) {
        this.service = service;
        this.toggleState = 'out';
        this.stateNow = 'show';
        this.tempDiv = 1;
        this.getData = [];
        this.id = 1;
        this.service.allTasks().subscribe(data => this.getData = data, error => alert(error), () => {
            let arr = Array.from(new Set(this.getData.map(x => x.ListId)));
            this.listCount = Array(arr.length).fill(1).map((x, i) => i);
        });
    }
    toggle() {
        this.toggleState = this.toggleState === 'in' ? 'out' : 'in';
    }
    changeNumber(num) {
        this.tempDiv = num;
        this.id = num;
        console.log(this.id);
    }
    state(divId) {
        if (divId == this.tempDiv) {
            return 'hide';
        }
        else {
            return 'show';
        }
    }
};
LeftPanel = __decorate([
    core_1.Component({
        selector: 'ng-leftPanel',
        templateUrl: '/Scripts/app/timer/LeftPanel/leftpanel.html',
        encapsulation: core_1.ViewEncapsulation.None,
        animations: [core_1.trigger('slideInOut', [
                core_1.state('in', core_1.style({ 'width': '75px' })),
                core_1.state('out', core_1.style({ 'width': '0px' })),
                core_1.transition('in => out', core_1.animate('400ms ease-in-out')),
                core_1.transition('out => in', core_1.animate('400ms ease-in-out'))
            ]),
            core_1.trigger('toggle', [
                core_1.state('hide', core_1.style({ transform: 'translateX(0)', opacity: 1 })),
                core_1.state('show', core_1.style({ transform: 'translateX(50%)', display: 'none', opacity: 0 })),
                core_1.transition('show => hide', core_1.animate('400ms  ease-in-out ')),
                core_1.transition('hide => show', core_1.animate('000ms ease-in-out '))
            ])
        ],
        providers: [Http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [Http_service_1.HttpService])
], LeftPanel);
exports.LeftPanel = LeftPanel;
//# sourceMappingURL=leftpanel.component.js.map