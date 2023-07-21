import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  jobDetails: any;
  constructor() { }
  getJobDetails() {
    return this.jobDetails;
  }
  setJobDetails(jobdetails: any) {
    this.jobDetails = jobdetails;
  }
}
