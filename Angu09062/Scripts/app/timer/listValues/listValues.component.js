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
const editTask_component_1 = require("./EditTask/editTask.component");
let ListValues = class ListValues {
    constructor(service) {
        this.service = service;
        this.list = [];
        this.listAfterFilter = [];
        this.doneOrAll = true;
        this.predic = "";
        this.restart = new core_1.EventEmitter();
        this.added = new core_1.EventEmitter();
        this.status = "true";
        this.service.allTasks().subscribe(data => this.list = data, error => alert(error), () => {
            this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
        });
    }
    ngOnInit() {
        this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
    }
    openModal(task) {
        this.editTask.showModal(task);
    }
    ngOnChanges() {
        if (this.doneOrAll == null) {
            this.listAfterFilter = this.list.filter(task => task.Status === 0 &&
                task.ListId === this.id &&
                task.Text.toLocaleLowerCase().includes(this.predic.toLocaleLowerCase()));
        }
        else {
            this.listAfterFilter = this.doneOrAll ? this.list.filter(x => x.ListId == this.id && x.Text.toLocaleLowerCase().includes(this.predic.toLocaleLowerCase())) : this.list.filter(task => task.Status === 1 && task.ListId === this.id && task.Text.toLocaleLowerCase().includes(this.predic.toLocaleLowerCase()));
        }
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
        let task = new Http_service_1.Task(null, this.id, this.topic + " " + this.val, 0);
        this.service.addTask(task).subscribe(data => console.log("udalo się " + data), error => console.log("chuja sie udalo" + error), () => {
            console.log("topic" + task.Text);
            this.list.unshift(task);
        });
        this.added.emit(null);
    }
    editEvent(id, status) {
    }
    showDoneTasks() {
        this.doneOrAll = false;
        console.log(" showDoneTasks " + this.doneOrAll);
    }
    showAllTasks() {
        this.doneOrAll = true;
        console.log(" showAllTasks " + this.doneOrAll);
    }
    showToDo() {
        this.doneOrAll = null;
        console.log(" showToDo " + this.doneOrAll);
    }
    changeBackground() {
        return { 'background-color': 'green' };
    }
    styleDoneTask(task) {
        if (task.Status === 1) {
            return { 'border-color': '#4fc528' };
        }
    }
    changeStatus(task) {
        if (task.Status === 0) {
            task.Status = 1;
        }
        else {
            task.Status = 0;
        }
        this.service.editTask(task).subscribe(data => console.log(data), error => console.log("cos neee tak " + error), () => { });
    }
};
__decorate([
    core_1.ViewChild(editTask_component_1.EditTask),
    __metadata("design:type", editTask_component_1.EditTask)
], ListValues.prototype, "editTask", void 0);
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