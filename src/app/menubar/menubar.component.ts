import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  lists: any = [];

  constructor() { }

  openNav() {
    document.getElementById("menu").style.width = "400px";
    document.getElementById("bg-container").style.marginLeft = "400px";
  }

  closeNav() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("bg-container").style.marginLeft = "0px";
  }

  showList() {
    this.lists = JSON.parse(localStorage.getItem('lists'));
  }

  ngOnInit() {
  }
}

