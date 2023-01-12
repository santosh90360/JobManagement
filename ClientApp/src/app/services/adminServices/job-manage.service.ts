import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JobDetail } from '../../models/job-detail';

@Injectable({
  providedIn: 'root'
})
export class JobManageService {
  Url: string;
  token: string = "";
  header: any;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.Url = baseUrl;
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  CreateJob(jobDetail: JobDetail) {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<JobDetail[]>(this.Url + 'accountapi/createjob', jobDetail, httpOptions)
  }
}
