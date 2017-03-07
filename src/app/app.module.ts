import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {decimalDigest} from "@angular/compiler/src/i18n/digest";
import {TodosComponent} from "./todos/todos.component";
import {UserComponent} from "./user/user.component";
import { WeatherComponent } from './weather/weather.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserComponent,
    WeatherComponent,
    MenubarComponent
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
