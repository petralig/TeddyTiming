
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
  listname: string = "";

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
    //localStorage.setItem('list', JSON.stringify(this.items));
  }

  deleteTodo(index) {
    this.items.splice(index, 1);
    //localStorage.setItem('list', JSON.stringify(this.items));
  }

  deleteSelected() {
    for(let i=(this.items.length -1); i > -1; i--) {
      if(this.items[i].completed) {
        this.items.splice(i, 1);
        //localStorage.setItem('list', JSON.stringify(this.items));
      }
    }
  }

  createList() {    // toimii saven tavoin, lisää listan muistiin
    let lists: any = [];
    if (localStorage.getItem('lists') != null){
      lists = JSON.parse(localStorage.getItem('lists'));
    }
    const list: any = {
      name: this.listname,
      list: this.items
    };
    lists.push(list);
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  ngOnInit() {
    document.getElementById('navbar').style.display = "block";
    document.getElementById('logo').style.marginTop = "0";
  }

}
