import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  // private nimi = lista.name;
  // private sisalto = lista.list;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const lists = JSON.parse(localStorage.getItem('lists'));
    this.route.params.subscribe((params: any) => {
      console.log(params.name)
      const lista = lists[params.name];
      console.log(lista.list);
    });
  }

}
