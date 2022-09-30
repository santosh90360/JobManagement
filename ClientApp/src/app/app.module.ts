import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProductComponent } from './product/product.component';
import { Registration } from './models/registration';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
//import { DashboardComponent as DashboardComponentJobSeeker } from './jobseeker/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDirective } from './directives/user.directive';
import { UserRoleDirective } from './directives/user-role.directive';
import { AuthService } from './services/auth.service';
import { JobProviderRegistrationComponent } from './job-provider-registration/job-provider-registration.component';





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductComponent,
    RegistrationComponent,
    JobProviderRegistrationComponent,
    LoginComponent,
    //DashboardComponentJobSeeker,
    UserDirective,
    UserRoleDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //  { path: 'product', component: ProductComponent },
    //  { path: 'register', component: RegistrationComponent },
    //  { path: 'login', component: LoginComponent },
    //  { path: 'dashboard', component: DashboardComponent }

    //])
  ],
  exports: [
    UserDirective,
    UserRoleDirective
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
