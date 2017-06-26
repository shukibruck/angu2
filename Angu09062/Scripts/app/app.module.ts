import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LeftPanelModule} from "./timer/LeftPanel/leftpanel.module";

@NgModule({
    imports: [BrowserModule, FormsModule, LeftPanelModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class TimerModule { }