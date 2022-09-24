import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class AuthService {
  private user: User = new User();
  private role: Role = 0;

  isAuthorized() {
    //alert(!!this.user);
    return this.user?true:false;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.user.Role === role;
  }

  login(role: Role) {
    this.user = { Role: role };
  }

  logout() {  
    this.user = new User();
    //this.isAuthorized();
    
  }
}
