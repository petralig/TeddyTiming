import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {decimalDigest} from "@angular/compiler/src/i18n/digest";
import {TodosComponent} from "./todos/todos.component";
import {UserComponent} from "./user/user.component";
import {ProgressbarComponent} from "./progressbar/progressbar.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserComponent,
    ProgressbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }