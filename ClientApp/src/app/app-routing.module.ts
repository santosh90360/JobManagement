import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app-routing.guard';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './jobseeker/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './services/auth.service';

//const routes: Routes = [
//  { path: '', component: HomeComponent, pathMatch: 'full' },
//  { path: 'counter', component: CounterComponent },
//  { path: 'fetch-data', component: FetchDataComponent },
//  { path: 'product', component: ProductComponent },
//  { path: 'register', component: RegistrationComponent },
//  { path: 'login', component: LoginComponent },
//  { path: 'dashboard', component: DashboardComponent }

//];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'product',
        canActivate: [AuthGuard],
        component: ProductComponent
      },

      {
        path: 'jobseeker',
        canActivate: [AuthGuard],
        component: DashboardComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      }
    ]
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
  //{
  //  path: '**',
  //  component: NotFoundComponent
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }

