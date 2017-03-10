
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('navbar').style.display = "none";
    document.getElementById('logo').style.marginTop = "10em";
  }

}
