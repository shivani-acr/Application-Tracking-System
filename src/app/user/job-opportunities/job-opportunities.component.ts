import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiJoblistService } from '../api-joblist.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-job-opportunities',
  templateUrl: './job-opportunities.component.html',
  styleUrls: ['./job-opportunities.component.css'],
})
export class JobOpportunitiesComponent {
  jobOpportunities: any[] = [
    {
      "jobid": 1,
      "jobposition": "Java developer",
      "jobDescription": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore laudantium assumenda fugiat doloribus possimus molestias fuga recusandae ad numquam incidunt explicabo consectetur facilis doloremque atque placeat corrupti, excepturi harum.",
    },
    {
      "jobid": 2,
      "jobposition": "Java developer",
      "jobDescription": "",
    },
    {
      "jobid": 3,
      "jobposition": "Java developer",
      "jobDescription": "",
    },
    {
      "jobid": 4,
      "jobposition": "Java developer",
      "jobDescription": "",
    },
    {
      "jobid": 5,
      "jobposition": "Java developer",
      "jobDescription": "",
    },
    {
      "jobid": 6,
      "jobposition": "Java developer",
      "jobDescription": "",

    },
    {
      "jobid": 6,
      "jobposition": "Java developer",
      "jobDescription": "",

    }, {
      "jobid": 7,
      "jobposition": "Java developer",
      "jobDescription": "",

    }
  ]
  constructor(private _router: Router, private _api: ApiJoblistService, private sharedService: SharedService) { }
  navigateToApplyNow(jobID: number, index: number): void {
    this._router.navigate(['/apply-now', jobID]);
    this.sharedService.setJobDetails(this.jobOpportunities[index]);
  }
}
