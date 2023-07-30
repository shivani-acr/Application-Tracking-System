import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ManagejobsComponent } from './managejobs/managejobs.component';
import { MatMenuModule } from '@angular/material/menu';
import { JobPostFormComponent } from './jobpostform/jobpostform.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    LoginpageComponent,
    DashboardComponent,
    HeaderComponent,
    ManagejobsComponent,
    JobPostFormComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class AdminModule { }
