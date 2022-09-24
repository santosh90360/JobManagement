import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
//import * as internal from 'stream';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public productlist: Product[] = [];
  public name: string = "Santosh";

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'productapi/getproduct').subscribe(result => {
      debugger;
      this.productlist = result;
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit(): void {

  }  

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


