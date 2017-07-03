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
const Http_service_1 = require("../../Http.service");
const Rx_1 = require("rxjs/Rx");
let EditTask = class EditTask {
    constructor() {
        this.task = new Http_service_1.Task(1, 1, "", 2);
        console.log("utworzony ! ");
        console.log("from constructor " + this.task);
        console.dir("obse from constru" + this.taskToEdit);
    }
    //ngOnChanges() {
    //    document.getElementById("setText")[0].value(this.task.Text);
    //}
    //ngOnInit() {
    //    this.taskToEdit.subscribe((event: Task) => this.task = event,
    //        error => console.log("argghhh " + error),
    //        () => { console.log("IDD" + this.task.Id); });
    //}
    showModal(tasks) {
        console.dir("obse " + this.taskToEdit);
        console.dir(this.taskToEdit);
        let e = this.taskToEdit.subscribe((event) => this.task = event, error => console.log("argghhh " + error), () => { console.log("IDD" + this.task.Id); });
        console.dir(this.taskToEdit);
        $("#myModal").appendTo("body").modal('show');
        //let e = (<HTMLInputElement>document.getElementById('setText'));
        //console.log(e);
        //e.value = tasks.Text;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Rx_1.Observable)
], EditTask.prototype, "taskToEdit", void 0);
EditTask = __decorate([
    core_1.Component({
        selector: 'ngEditTask',
        templateUrl: "/Scripts/app/timer/listValues/EditTask/EditTask.html",
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], EditTask);
exports.EditTask = EditTask;
//# sourceMappingURL=editTask.component.js.map