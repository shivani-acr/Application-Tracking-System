import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiJoblistService } from '../api-joblist.service';
import { SharedService } from 'src/app/services/shared.service';
import { JoblistingService } from 'src/app/services/joblisting.service';
import { Joblisting } from 'src/app/joblisting';

@Component({
  selector: 'app-job-opportunities',
  templateUrl: './job-opportunities.component.html',
  styleUrls: ['./job-opportunities.component.css'],
})

export class JobOpportunitiesComponent {
  jobOpportunities: any[] = [];
  active: boolean = false;
  jobsactive: any[] = [];
  constructor(
    private _router: Router,
    private _api: ApiJoblistService,
    private sharedService: SharedService,
    private jobListingService: JoblistingService
  ) {}

  ngOnInit(): void {
    this.getJobListing();
  }

  private getJobListing() {
    this.jobListingService.getJobListing().subscribe((data) => {
      this.jobOpportunities = data;
      for (let i = 0; i < <number>this.jobOpportunities.length; i++) {
        if (this.jobOpportunities[i].status === 'Active') {
          this.jobsactive.push(this.jobOpportunities[i]);
        }
      }
    });
  }

  navigateToApplyNow(jobID: number, index: number): void {
    this._router.navigate(['/apply-now', jobID]);
    this.sharedService.setJobDetails(this.jobOpportunities[index]);
  }
}
