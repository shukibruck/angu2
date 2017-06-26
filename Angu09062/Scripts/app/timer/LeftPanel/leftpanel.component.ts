﻿import { Component, ViewEncapsulation, trigger, state, style, transition, animate, Inject } from '@angular/core'
import { HttpService, Task } from "../Http.service"

@
    Component({
        selector: 'ng-leftPanel',
        templateUrl: '/Scripts/app/timer/LeftPanel/leftpanel.html',
        encapsulation: ViewEncapsulation.None,
        animations: [trigger('slideInOut',
            [
                state('in', style({ 'width': '75px' })),
                state('out', style({ 'width': '0px' })),
                transition('in => out', animate('400ms ease-in-out')),
                transition('out => in', animate('400ms ease-in-out'))
            ]),
        trigger('toggle',
            [
                state('hide', style({ transform: 'translateX(0)', opacity: 1 })),
                state('show', style({ transform: 'translateX(50%)', display: 'none', opacity: 0 })),
                transition('show => hide', animate('400ms  ease-in-out ')),
                transition('hide => show', animate('000ms ease-in-out '))
            ])
        ],
        providers: [HttpService]
    })

export class LeftPanel {
    toggleState: string = 'out';
    stateNow: string = 'show';
    tempDiv: number = 1;
    listCount: Array<number>;
    getData: Task[] = [];

    constructor(private service: HttpService) {
        this.service.allTasks().subscribe(data => this.getData = data,
            error => alert(error),
            () => {
                console.log(this.getData.length);
                this.listCount = Array(this.getData.length).fill(1).map((x, i) => i);
            }
        );
        
    }

    toggle() {
        this.toggleState = this.toggleState === 'in' ? 'out' : 'in';
    }



    changeNumber(num: number) {
        this.tempDiv = num;
    }

    state(divId: number): string {
        if (divId == this.tempDiv) {
            return 'hide';
        } else {
            return 'show';
        }
    }

}