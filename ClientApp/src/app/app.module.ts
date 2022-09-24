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
import { DashboardComponent } from './jobseeker/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'product', component: ProductComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
