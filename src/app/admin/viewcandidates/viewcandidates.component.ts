import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/services/applicant.service';
import { JoblistingService } from 'src/app/services/joblisting.service';
import { Applicant } from 'src/app/applicant';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-viewcandidates',
  templateUrl: './viewcandidates.component.html',
  styleUrls: ['./viewcandidates.component.css'],
})

export class ViewcandidatesComponent implements OnInit {
  jobPositions: any[] = [];
  constructor(
    private jobListingService: JoblistingService,
    private applicantService: ApplicantService
  ) {}
  selectedJobId!: number;
  applications: Applicant[] = [];
  ngOnInit() {
    this.getJobListing();
  }

  onOptionSelected() {
    if (this.selectedJobId > 0) {
      this.applicantService.getApplicantsByJobId(this.selectedJobId).subscribe(
        (data) => {
          this.applications = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  private getJobListing() {
    this.jobListingService.getJobListing().subscribe(
      (data) => {
        this.jobPositions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewResume() {
    this.applicantService.downloadFile().subscribe(
      (response: any) => {
        let blob: any = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error: any) => console.log(error)
    );
  }
  
  downloadResume() {
    this.applicantService.downloadFile().subscribe(
      (response: any) => {
        let blob: any = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        saveAs(blob, 'file.pdf');
      },
      (error: any) => console.log(error)
    );
  }
}
