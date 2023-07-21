import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from 'src/app/applicant';
import { ApplicantService } from 'src/app/services/applicant.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css'],
})
export class ApplyNowComponent implements OnInit {
  myForm: any;
  fileName = '';
  jobID!: number;
  applicant: Applicant = new Applicant();
  job = this.sharedService.getJobDetails();
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private applicantService: ApplicantService,
    private sharedService: SharedService
  ) { }
  ngOnInit() {
    this.jobID = this.route.snapshot.params['jobID'];
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      currentlocation: ['', [Validators.required]],
      availabilityfrom: ['', [Validators.required]],
      acceptedpolicy: ['', [Validators.required]],
      are_you_a_previous_employee: ['', [Validators.required]],
      file: [null, Validators.required],
      EmailID: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    });
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileName = file.name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.myForm.patchValue({
          file: reader.result,
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
  saveEmployee() {
    this.applicantService.createapplicant(this.applicant).subscribe((response) => {
      console.log(response)
      this.goToStart();
    },
      (error) => console.log(error)
    );
  }
  goToStart() {
    this.router.navigate(['job-opportunities']);
  }
  saveForm() {
    if (this.myForm.valid) {
      this.applicant.firstName = this.myForm.value.firstname;
      this.applicant.lastName = this.myForm.value.lastname;
      this.applicant.phoneNumber = this.myForm.value.phonenumber;
      this.applicant.currentLocation = this.myForm.value.currentlocation;
      this.applicant.totalExperience = this.myForm.value.experience;
      if (this.myForm.value.are_you_a_previous_employee === "Yes") {
        this.applicant.previousEmployee = true;
      } 
      else {
        this.applicant.previousEmployee = false;
      }
      this.applicant.cookiesPolicy = this.myForm.value.acceptedpolicy;
      this.applicant.availabilityForm =
        this.myForm.value.availabilityfrom;
      this.applicant.skills = this.myForm.value.skills;
      this.applicant.jobId = this.jobID;
      //this.applicant.emailID = this.myForm.value.EmailID;
      //this.applicant.address = this.myForm.value.Address;
      //this.applicant.file = this.myForm.value.file;
      console.log(this.applicant)
    }
    this.saveEmployee();
  }
}
