import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './jobpostform.component.html',
  styleUrls: ['./jobpostform.component.css']
})
export class JobPostFormComponent implements OnInit {
  jobPostForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.jobPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      skills: ['', Validators.required],
      description: ['', Validators.required],
      experience: ['', Validators.required],
      Status: ['',Validators.required]
    });
  }

  submitJobPost() {
    if (this.jobPostForm.valid) {
      // Perform job post submission logic here
      console.log('Job post submitted:', this.jobPostForm.value);
      // Reset the form
      this.jobPostForm.reset();
    } else {
      // Mark form controls as touched to display validation errors
      this.jobPostForm.markAllAsTouched();
    }
  }

  isFieldInvalid(field: string) {
    return (
      this.jobPostForm.get(field).invalid &&
      (this.jobPostForm.get(field).touched || this.jobPostForm.get(field).dirty)
    );
  }
}
