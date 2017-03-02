import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private apinVastaus: any = {};

  constructor(private http: Http) { }

  private getApi() {
      this.http.get('http://api.aerisapi.com//observations/helsinki,fi?client_id=cIXZBPPK70aGNPlxYsWzB&client_secret=vuDLfmtvIavS3zmtU35PcTXtpfdmUTTr5KHO1G3S')
        .subscribe(
          (res:Response) => {
            this.apinVastaus = res.json();
            console.log(this.apinVastaus);
          }
        );
    }


  ngOnInit() {
    this.getApi();
  }

}



