import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../models/registration';
import { Role } from '../models/role';
import { AccountManageService } from '../services/account-manage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userReg: Registration = new Registration(); 
  Role = Role;
  constructor(private router: Router, private accountManage: AccountManageService, private authService: AuthService) { }

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
          this.authService.login(Role.Admin);
          this.router.navigate(['/']);
          //this.router.navigate(['dashboard']);
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

  logout() {
    this.authService.logout();
  }
}
