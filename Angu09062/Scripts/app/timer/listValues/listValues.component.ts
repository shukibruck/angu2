import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { HttpService, Task } from "../Http.service"


@Component({
    selector: 'ng-listValues',
    templateUrl: '/Scripts/app/timer/listValues/listValues.html',
    encapsulation: ViewEncapsulation.None,
    providers: [HttpService]
})

export class ListValues {
    list: Task[] = [];
    status: string;
    listAfterFilter: Task[] = [];
    constructor(private service: HttpService) {
        this.status = "true";
        this.service.allTasks().subscribe(data => this.list = data,
            error => alert(error),
            () => {
                console.log(this.list);
            }
        );

    }
    text: string;
    addEvent() {
        let task = new Task(null, 3, 'text');
        this.service.addTask(task).subscribe(data => console.log("udalo się " + data),
            error => console.log("chuja sie udalo" + error),
            () => {
                console.log(this.text);
            }
        );
    }
    ngOnInit() {
        this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
    }
    @Input() topic: string;
    @Input() val: number;
    @Input() id: number;
    @Output() restart: EventEmitter<string> = new EventEmitter<string>();
    @Output() added: EventEmitter<any> = new EventEmitter();

    ngOnChanges() {
        this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
    }

    restartCounter() {
        if (this.status == "true") {
            this.restart.emit(this.status);
            this.status = "false";
        } else {
            this.restart.emit(this.status);
            this.status = "true";
        }
    }

    addToList() {
        let task = new Task(null, this.id, this.topic);
        this.list.push(task);
        this.service.addTask(new Task(null, this.id, this.topic)).subscribe(data => console.log("udalo się " + data),
            error => console.log("chuja sie udalo" + error),
            () => {
                //console.log("topic" + this.topic);
                //let task = new Task(null, this.id, this.topic);
                //this.list.push(task);
                //console.log(task);
            }
        );
        this.added.emit(null);
    }
}

