import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Timer } from "./timer.component";
import { ListValues } from "./listValues/listValues.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [Timer, ListValues],
    exports: [Timer],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimerComponentModule {
     
}