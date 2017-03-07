import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ListsComponent } from './lists/lists.component';

import { RouterModule } from "@angular/router";
import { MainComponent } from './main/main.component';
import {WeatherComponent} from "./weather/weather.component";

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'lists/:name',
    component: ListsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserComponent,
    MenubarComponent,
    ListsComponent,
    MainComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
