import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

import { Product } from '../models/product';

//import * as internal from 'stream';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productlist: Product[] = [];
  public name: string = "Santosh";
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {    
    http.get<Product[]>(baseUrl + 'accountapi/getproduct').subscribe(result => {
      debugger;
      this.productlist = result;
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit(): void {

  }  

}
