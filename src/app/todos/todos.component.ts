
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  newItem: string;
  items: any;
  itemObj: any;
  lists: any = [];

  //private list: any = {};

  constructor() {
    this.newItem = '';
    this.items = [];
  }

  addItem(event) {
    this.itemObj = {
      newItem: this.newItem,
      completed: false
    };
    this.items.push(this.itemObj);
    this.newItem = '';
    event.preventDefault();
    console.log(this.items);
    localStorage.setItem('list', JSON.stringify(this.items));
  }

  //saveList = (formValues: any) => {
      //localStorage.setItem('list', JSON.stringify(formValues));
      //console.log(formValues);
  //  };

  deleteTodo(index) {
    this.items.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.items));
  }

  deleteSelected() {
    // ES5?
    for(let i=(this.items.length -1); i > -1; i--) {
      if(this.items[i].completed) {
        this.items.splice(i, 1);
        localStorage.setItem('list', JSON.stringify(this.items));
      }
    }
  }

  createList() {          // toimii saven tavoin, lisää listan muistiin
    this.lists.push(this.items);
    localStorage.setItem('lists', JSON.stringify(this.items));
  }

  ngOnInit() {
    // this.lists = JSON.parse(localStorage.getItem('lists'));      // <-- menu-komponenttiin
  }

}

