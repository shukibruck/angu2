import { Component, ViewEncapsulation, Input } from '@angular/core'
import { Task } from "../../Http.service"
import { Observable } from 'rxjs/Rx';

declare var $: any;
@Component({
    selector: 'ngEditTask',
    templateUrl: "/Scripts/app/timer/listValues/EditTask/EditTask.html",
    encapsulation: ViewEncapsulation.None
    
})
export class EditTask {
    @Input() taskToEdit: Observable<Task>;
    task: Task = new Task(1,1,"",2);

    constructor() {
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
    public showModal(tasks: Task) {
        console.dir("obse " + this.taskToEdit);
        console.dir(this.taskToEdit);

        let e = this.taskToEdit.subscribe((event: Task) => this.task = event,
            error => console.log("argghhh " + error),
            () => {console.log("IDD"+this.task.Id); }
        );
        console.dir(this.taskToEdit);
        $("#myModal").appendTo("body").modal('show');
        //let e = (<HTMLInputElement>document.getElementById('setText'));
        //console.log(e);
        //e.value = tasks.Text;
    }
}