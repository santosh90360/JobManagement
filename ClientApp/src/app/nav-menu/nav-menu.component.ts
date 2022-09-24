import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  Role = Role;
  constructor(private router: Router, private authService: AuthService) { }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
  }

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  get isJobSeeker() {
    return this.authService.hasRole(Role.JobSeeker);
  }
  get isUser() {
    return this.authService.hasRole(Role.User);
  }
  //get isLogin() {
  //  return this.authService.hasRole(Role.Login);
  //}

  logout() {
    this.authService.hasRole(Role.User);
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
