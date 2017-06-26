import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 

@Component({
    selector: 'NgTimer',
    templateUrl: '/Scripts/app/timer/timer.html',
    encapsulation: ViewEncapsulation.None
})

export class Timer {
    timer = 0;
    start = Observable.timer(0, 1000);
    unSub;
    subjectName: string = "";

    ngOnInit() {
        
       this.unSub = this.start.subscribe(t => this.timer = t);
    }

    kill(status: string) {
        if (status == "true") {
            console.log(status);
            this.unSub.unsubscribe();
        } else if (status == "false") {
            console.log(status);
            this.unSub = this.start.subscribe(t => this.timer = t);
        }
        console.log(this.subjectName);
    }

    clear(): void {
        this.subjectName = "";
    }
}