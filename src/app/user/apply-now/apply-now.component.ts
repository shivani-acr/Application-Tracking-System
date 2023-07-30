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
  now = new Date();
  success = false;
  currentFile!: File;
  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private applicantService: ApplicantService,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.jobID = this.route.snapshot.params['jobID'];
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      phonenumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
        ],
      ],
      experience: [, [Validators.required, Validators.pattern('^[0-9]*$')]],
      skills: ['', [Validators.required]],
      currentlocation: ['', [Validators.required]],
      availabilityfrom: ['', [Validators.required]],
      acceptedpolicy: ['', [Validators.required, Validators.requiredTrue]],
      are_you_a_previous_employee: ['', [Validators.required]],
      file: [null, Validators.required],
      EmailID: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required]],
    });
  }
  onFileChange(event: any) {
    this.currentFile = event.target.files[0];
    this.fileName = this.currentFile.name;
    this.myForm.get('file').setValue(this.currentFile);
  }
  saveEmployee(data: FormData) {
    this.applicantService.createapplicant(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  saveForm() {
    if (this.myForm.valid) {
      const formData = new FormData();
      this.success = true;
      this.applicant.firstName = this.myForm.value.firstname;
      this.applicant.lastName = this.myForm.value.lastname;
      this.applicant.phoneNumber = this.myForm.value.phonenumber;
      this.applicant.currentLocation = this.myForm.value.currentlocation;
      this.applicant.totalExperience = this.myForm.value.experience;
      if (this.myForm.value.are_you_a_previous_employee === 'Yes') {
        this.applicant.previousEmployee = true;
      } else {
        this.applicant.previousEmployee = false;
      }
      this.applicant.cookiesPolicy = this.myForm.value.acceptedpolicy;
      this.applicant.availabilityForm = this.myForm.value.availabilityfrom;
      this.applicant.skills = this.myForm.value.skills;
      this.applicant.jobId = this.jobID;
      this.applicant.email = this.myForm.value.EmailID;
      this.applicant.home = this.myForm.value.Address;
      //this.applicant.file = this.myForm.value.file;
      formData.append('file', this.myForm.value.file);
      const jsonData = JSON.stringify(this.applicant);
      formData.append('applicantDto', jsonData);
      //console.log(formData.get('applicantDto'));
      this.myForm.reset({});
      this.saveEmployee(formData);
    }
  }
}
