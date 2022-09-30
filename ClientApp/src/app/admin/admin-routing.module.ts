import { Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, {path:'add-job',component:AddJobComponent}
];
