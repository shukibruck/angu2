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
        console.log(this.listAfterFilter);
        console.log("idee " + this.id);
    }

    restartCounter() {
        if (this.status == "true") {
            this.restart.emit(this.status);
            this.status = "false";
        } else {
            this.restart.emit(this.status);
            this.status = "true";
        }
        console.log("->>>"+this.id);
    }

    addToList() {
        //this.list.push(new Task(this.topic, this.val));
        this.added.emit(null);
    }
}

