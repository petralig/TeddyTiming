import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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

  deleteList(i) {
    this.lists = JSON.parse(localStorage.getItem('lists'));
    this.lists.splice(i, 1);
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  listAlert() {
    localStorage.removeItem('lists');
    // this.router.navigate(['main']);
  }

  ngOnInit() {
  }
}
