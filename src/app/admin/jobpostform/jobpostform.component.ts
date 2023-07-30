import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Joblisting } from 'src/app/joblisting';
import { JoblistingService } from 'src/app/services/joblisting.service';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './jobpostform.component.html',
  styleUrls: ['./jobpostform.component.css'],
})
export class JobPostFormComponent {
  jobForm: any;
  jobListing: Joblisting = new Joblisting();
  id!: number;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private jobListingService: JoblistingService,private router:Router) { }
  ngOnInit(): void {
    if (this.route.snapshot.params['i']) {
      this.id = this.route.snapshot.params['i'];
      this.jobListingService.getJobListingById(this.id).subscribe(data => {
        this.jobForm = this.formBuilder.group({
          jobTitle: [data.jobTitle, Validators.required],
          workLocation: [data.workLocation, Validators.required],
          requiredSkills: [data.requiredSkills, Validators.required],
          status: [data.status, Validators.required],
          requiredExperience: [data.experience, Validators.required],
          jobDescription: [data.jobDescription, Validators.required],
        });
        console.log(data);
        console.log(this.jobForm.value.jobTitle);
      }, error => console.log(error));
    }
    else{
      this.jobForm = this.formBuilder.group({
        jobTitle: ['', Validators.required],
        workLocation: ['', Validators.required],
        requiredSkills: ['', Validators.required],
        status: ['', Validators.required],
        requiredExperience: ['', Validators.required],
        jobDescription: ['', Validators.required],
      });
    }
  }
  saveJobListing() {
    this.jobListingService.createjobListing(this.jobListing).subscribe((response) => {
      console.log(response)
      // this.goToStart();
    },
      (error) => {
        console.log(error)
      }
    );
  }
  onSubmit() {
    if (this.jobForm.valid) {
      // Handle form submission
      this.jobListing.jobTitle = this.jobForm.value.jobTitle;
      this.jobListing.jobDescription = this.jobForm.value.jobDescription;
      this.jobListing.workLocation = this.jobForm.value.workLocation;
      this.jobListing.status = this.jobForm.value.status;
      this.jobListing.experience = this.jobForm.value.requiredExperience;
      this.jobListing.requiredSkills = this.jobForm.value.requiredSkills;
      if(this.route.snapshot.params['i']){
        this.jobListing.jobId  = this.id;
        this.jobListingService.updateJobListing(this.id, this.jobListing).subscribe( data =>{
          this.goToManageJobs();
        }
        , error => console.log(error));
      }
      else{
        this.saveJobListing();
      }
    } else {
      // Display error messages or handle invalid form
    }
  }
  goToManageJobs() {
    this.router.navigate(['/managejobs']);
  }
}
