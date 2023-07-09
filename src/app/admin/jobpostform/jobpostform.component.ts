import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './jobpostform.component.html',
  styleUrls: ['./jobpostform.component.css'],
})
export class JobPostFormComponent {
  jobForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      workLocation: ['', Validators.required],
      requiredSkills: ['', Validators.required],
      status: ['', Validators.required],
      requiredExperience: ['', Validators.required],
      jobDescription: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      // Handle form submission
    } else {
      // Display error messages or handle invalid form
    }
  }
}
