import { Component, ViewEncapsulation, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { HttpService, Task } from "../Http.service"
import { EditTask } from "./EditTask/editTask.component";
import { Observable } from 'rxjs/Rx';

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
    doneOrAll: boolean = true;
    predic: string = "";
    @ViewChild(EditTask) editTask: EditTask;
    @Output() taskToEdit2: Observable<Task>;
    taskEdVal: Task = new Task(1, 1, "", 1);

    taskToEdit: Observable<Task>;



    constructor(private service: HttpService) {
        this.status = "true";
        this.service.allTasks().subscribe(data => this.list = data,
            error => alert(error),
            () => {
                this.listAfterFilter = this.list.filter(x => x.ListId == this.id);
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

    openModal(task: Task): Observable<Task> {
        this.taskToEdit = this.retrunObs();
        console.log("from parent bse");
        console.dir(this.taskToEdit);
        this.taskEdVal = task;
        this.editTask.showModal(task);

        return this.taskToEdit2;
    }

    retrunObs(): Observable<Task> {

        this.taskToEdit2 = new Observable<Task>(obs => { obs.emit(this.taskEdVal) });
        return this.taskToEdit2;
    }

    ngOnChanges() {
        if (this.doneOrAll == null) {
            this.listAfterFilter = this.list.filter(task => task.Status === 0 &&
                task.ListId === this.id &&
                task.Text.toLocaleLowerCase().includes(this.predic.toLocaleLowerCase()));
        } else {
            this.listAfterFilter = this.doneOrAll ? this.list.filter(x => x.ListId == this.id && x.Text.toLocaleLowerCase().includes(this.predic.toLocaleLowerCase())) : this.list.filter(task => task.Status === 1 && task.ListId === this.id && task.Text.toLocaleLowerCase().includes(this.predic.toLocaleLowerCase()));
        }
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
        let task = new Task(null, this.id, this.topic + " " + this.val, 0);

        this.service.addTask(task).subscribe(data => console.log("udalo się " + data),
            error => console.log("chuja sie udalo" + error),
            () => {
                console.log("topic" + task.Text);
                this.list.unshift(task);
            }
        );
        this.added.emit(null);
    }

    editEvent(id: number, status: number) {

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

    changeBackground(): any {
        return { 'background-color': 'green' };
    }

    styleDoneTask(task: Task): any {

        if (task.Status === 1) {
            return { 'border-color': '#4fc528' }
        }
    }

    changeStatus(task: Task) {
        if (task.Status === 0) {
            task.Status = 1;
        } else {
            task.Status = 0;
        }

        this.service.editTask(task).subscribe(data => console.log(data),
            error => console.log("cos neee tak " + error),
            () => { }
        );
    }
}

