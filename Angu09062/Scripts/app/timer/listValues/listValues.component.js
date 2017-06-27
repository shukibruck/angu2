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
let ListValues = class ListValues {
    constructor(service) {
        this.service = service;
        this.list = [];
        this.listAfterFilter = [];
        this.restart = new core_1.EventEmitter();
        this.added = new core_1.EventEmitter();
        this.status = "true";
        this.service.allTasks().subscribe(data => this.list = data, error => alert(error), () => {
            console.log(this.list);
        });
    }
    addEvent() {
        let task = new Http_service_1.Task(null, 3, 'text');
        this.service.addTask(task).subscribe(data => console.log("udalo się " + data), error => console.log("chuja sie udalo" + error), () => {
            console.log(this.text);
        });
    }
    ngOnInit() {
        this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
    }
    ngOnChanges() {
        this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
    }
    restartCounter() {
        if (this.status == "true") {
            this.restart.emit(this.status);
            this.status = "false";
        }
        else {
            this.restart.emit(this.status);
            this.status = "true";
        }
    }
    addToList() {
        let task = new Http_service_1.Task(null, this.id, this.topic);
        this.list.push(task);
        this.service.addTask(new Http_service_1.Task(null, this.id, this.topic)).subscribe(data => console.log("udalo się " + data), error => console.log("chuja sie udalo" + error), () => {
            //console.log("topic" + this.topic);
            //let task = new Task(null, this.id, this.topic);
            //this.list.push(task);
            //console.log(task);
        });
        this.added.emit(null);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ListValues.prototype, "topic", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ListValues.prototype, "val", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ListValues.prototype, "id", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ListValues.prototype, "restart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ListValues.prototype, "added", void 0);
ListValues = __decorate([
    core_1.Component({
        selector: 'ng-listValues',
        templateUrl: '/Scripts/app/timer/listValues/listValues.html',
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [Http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [Http_service_1.HttpService])
], ListValues);
exports.ListValues = ListValues;
//# sourceMappingURL=listValues.component.js.map