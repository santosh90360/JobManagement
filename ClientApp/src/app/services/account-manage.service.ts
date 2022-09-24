import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class AccountManageService { 
  Url: string;
  token: string = "";
  header: any;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.Url = baseUrl;
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(register: Registration) {
    debugger;  
    return this.http.post<any>(this.Url + 'accountapi/login', register, { headers: this.header });
  }
  CreateUser(register: Registration) {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Registration[]>(this.Url + 'accountapi/createuseraccount', register, httpOptions)
  }
}
