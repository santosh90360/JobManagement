import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../models/registration';
import { AccountManageService } from '../services/account-manage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userReg: Registration = new Registration();  
  constructor(private router: Router, private accountManage: AccountManageService) { }

  ngOnInit(): void {
  }
  login(registrationForm: NgForm) {
    debugger;
    registrationForm.value.mobile = "";
    registrationForm.value.gender = '';
    registrationForm.value.middleName = '';
    registrationForm.value.firstName = '';
    registrationForm.value.lastName = '';
    this.accountManage.Login(registrationForm.value).subscribe(
      data => {
        debugger;
        if (data.isSuccess == true) {
          //this.authService.login(data.result.userType);
          //this.authService.isLogin = true;
          this.userReg = new Registration();
          this.router.navigate(['dashboard']);
          debugger;
        }
        else {
          alert(data.Message);
        }
      },
      error => {
        alert(error.message);
      });
  };
}
