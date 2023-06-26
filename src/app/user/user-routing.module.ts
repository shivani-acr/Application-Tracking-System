import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobOpportunitiesComponent } from './job-opportunities/job-opportunities.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';

// Define the routes for the user module
const routes: Routes = [
    { path: '',component:JobOpportunitiesComponent},
    { path: 'job-opportunities', component: JobOpportunitiesComponent },
    { path: 'apply-now', component: ApplyNowComponent },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UserRoutingModule { }