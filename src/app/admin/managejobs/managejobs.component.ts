import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Joblisting } from 'src/app/joblisting';
import { JoblistingService } from 'src/app/services/joblisting.service';

@Component({
  selector: 'app-content',
  templateUrl: './managejobs.component.html',
  styleUrls: ['./managejobs.component.css']

})
export class ManagejobsComponent {
  jobdetails: any[] = [];
  constructor(private jobListingService : JoblistingService, private router : Router) { }
  ngOnInit(): void {
    this.getJobListing();
  }
  private getJobListing(){
    this.jobListingService.getJobListing().subscribe(data => {
      this.jobdetails = data;
    },
    (error) => {
      console.log(error)
    });
  }
  changestatus(i: number,jobinfo:Joblisting) {
    if (jobinfo.status == "Active") {
      jobinfo.status = "Not Active";
      this.jobListingService.updateJobListing(i, jobinfo).subscribe( data =>{
        this.goToManageJobs();
      },(error) => {
        console.log(error)
      });

    }
    else {
      jobinfo.status = "Active";
      this.jobListingService.updateJobListing(i, jobinfo).subscribe( data =>{
        this.goToManageJobs();
      },(error) => {
        console.log(error)
      });
    }
  }
  goToManageJobs() {
    this.router.navigate(['/managejobs']);
  }
  deletejobListing(i: number) {
    this.jobListingService.deleteJobListing(i).subscribe(data => {
      console.log('adsfasd');
      this.getJobListing();
    },
    (error) => {
      console.log(error)
    });
  }
  update(i:number){
    this.router.navigate(['/post-job/update',i]);
  }
}
