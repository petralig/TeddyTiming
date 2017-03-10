import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  private nimi;
  private sisalto = [];
  private lists = [];
  private lista: any = {};

  constructor(
    private route: ActivatedRoute
  ) {
  }

  /* deleteList(index) {
   localStorage.removeItem('lists');
   // const lists = localStorage.getItem('lists');
   // lists.splice(index, 1);
   }*/

  changeState(i, checked) {
    console.log(checked);
    this.sisalto[i].completed = checked;
    this.lista.list = this.sisalto;
    console.log(this.lista.list);
    this.lists[this.nimi].list = this.lista.list;
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  /*deleteTodo(index) {
   this.sisalto.splice(index, 1);
   this.sisalto = JSON.parse(localStorage.getItem('lists'));
   this.sisalto.splice(index, 1);
   localStorage.setItem('lists', JSON.stringify(this.sisalto));
   }*/

  /*deleteSelected() {
   for(let i=(this.sisalto.length -1); i > -1; i--) {
   if(this.sisalto[i].completed) {
   //deleteTodo(i);
   }
   }
   }*/

  deleteTodo(i) {
    this.lists = JSON.parse(localStorage.getItem('lists'));
    this.lista = this.lists[this.nimi];
    this.sisalto = this.lista.list;
    this.sisalto.splice(i, 1);
    this.lista.list = this.sisalto;
    this.lists[this.nimi].list = this.lista.list;
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  ngOnInit() {
    this.lists = JSON.parse(localStorage.getItem('lists'));
    this.route.params.subscribe((params: any) => {
      this.nimi = params.name;
      this.lista = this.lists[this.nimi];
      console.log(this.lists);
      this.sisalto = this.lista.list;

    });
  }

}
