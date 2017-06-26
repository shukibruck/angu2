import { Component, ViewEncapsulation, Input } from '@angular/core';
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
    @Input() id: number;

    ngOnInit() {
        
        this.unSub = this.start.subscribe(t => this.timer = t);
        console.log("nume  " + this.id);
    }

    kill(status: string) {
        if (status == "true") {
            this.unSub.unsubscribe();
        } else if (status == "false") {
            this.unSub = this.start.subscribe(t => this.timer = t);
        }
    }

    clear(): void {
        this.subjectName = "";
    }
}