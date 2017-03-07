import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private apinVastaus: any = {};
  private paikka: any = {};
  private lampotilat: any = {};


  constructor(private http: Http) { }

  private getApi(lomake) {
      this.http.get('http://api.aerisapi.com//observations/'+lomake.kaupunki+','+lomake.maa+'?client_id=cIXZBPPK70aGNPlxYsWzB&client_secret=vuDLfmtvIavS3zmtU35PcTXtpfdmUTTr5KHO1G3S')
        .subscribe(
          (res:Response) => {
            this.apinVastaus = res.json();
            //console.log(this.apinVastaus);
            this.paikka = this.apinVastaus.response.place;
            this.lampotilat = this.apinVastaus.response.ob;
            console.log(this.paikka);
          }
        );
    }

  ngOnInit() {
    //this.getApi();
  }

}
