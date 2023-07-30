import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { ManagejobsComponent } from './managejobs/managejobs.component';
import { JobPostFormComponent } from './jobpostform/jobpostform.component';

const routes: Routes = [
  { path: 'admin', component: LoginpageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'managejobs',
    component: ManagejobsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post-job',
    component: JobPostFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post-job/update/:i',
    component: JobPostFormComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
