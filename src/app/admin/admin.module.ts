import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminRoutingModule } from './admin-routing.module';
import { JobPostFormComponent } from './jobpostform/jobpostform.component';


@NgModule({
  declarations: [LoginpageComponent,JobPostFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
})
export class AdminModule {}
