import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { JobPostFormComponent } from './jobpostform/jobpostform.component';
const routes: Routes = [
   
    { path: 'login', component: LoginpageComponent },
    {path :'post-job',component:JobPostFormComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }