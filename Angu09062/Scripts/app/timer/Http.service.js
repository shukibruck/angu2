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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
const http_2 = require("@angular/http");
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:53932/webapi/";
    }
    allTasks() {
        let tasks = this.http.get(this.url + 'GetEvents').map((res) => res.json());
        return tasks;
    }
    addTask(task) {
        let header = new http_2.Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(task);
        let respo = this.http.post(this.url + 'AddEvent' /*"https://requestb.in/yhldxsyh"*/, body, { headers: header }).map((res) => JSON.stringify(res.json()));
        return respo;
    }
};
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
class Task {
    constructor(Id, ListId, Text) {
        this.ListId = ListId;
        this.Id = null;
        this.Text = Text;
    }
}
exports.Task = Task;
//# sourceMappingURL=Http.service.js.map