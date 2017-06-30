import { Component, ViewEncapsulation, Input } from '@angular/core'
import { Task } from "../../Http.service"
declare var $: any;
@Component({
    selector: 'ngEditTask',
    templateUrl: "/Scripts/app/timer/listValues/EditTask/EditTask.html",
    encapsulation: ViewEncapsulation.None
    
})
export class EditTask {
    @Input() taskToEdit: Task;
    task: Task;
    public showModal(task: Task) {
        this.task = task;
        console.log(this.task);
       $("#myModal").modal('show');
    }
}