import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftPanel } from "./leftpanel.component";
import { TimerComponentModule } from "../timer.module";

@NgModule({
    imports: [CommonModule, TimerComponentModule],
    declarations: [LeftPanel],
    exports: [LeftPanel, TimerComponentModule]
})

export class LeftPanelModule {
    
}