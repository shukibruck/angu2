import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-listValues',
    templateUrl: '/Scripts/app/timer/listValues/listValues.html',
    encapsulation: ViewEncapsulation.None
})

export class ListValues {
    list: Task[] = [];
    status: string;
    constructor() {
        this.status = "true";
    }


    @Input() topic: string;
    @Input() val: number;
    @Output() restart: EventEmitter<string> = new EventEmitter<string>();
    @Output() added: EventEmitter<any> = new EventEmitter();

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
        this.list.push(new Task(this.topic, this.val));
        this.added.emit(null);
    }
}

export class Task {
    topic: string;
    time: number;

    constructor(topic: string, time: number) {
        this.topic = topic;
        this.time = time;
    }
}