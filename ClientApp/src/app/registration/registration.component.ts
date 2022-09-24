import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../models/registration';
import { ResponseDto } from '../models/responsedto';
import { AccountManageService } from '../services/account-manage.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit { 
  userReg: Registration = new Registration();
  constructor(private accountManage: AccountManageService) { }

  ngOnInit(): void {
  }

  userRegistration(registrationForm: NgForm): void {
    registrationForm.value.userType = '3'; // For Job seeker
    registrationForm.value.mobile = "";
    registrationForm.value.gender = '';
    registrationForm.value.middleName = '';
    this.CreateUser(registrationForm.value);
    console.log(registrationForm.value.email);
  }
  CreateUser(register: Registration) {
    this.accountManage.CreateUser(register).subscribe(results => {
      debugger;         
      let resultApi: ResponseDto = <ResponseDto><any>results;
      this.userReg = new Registration();
      alert(resultApi.result);
    });
  }
}
