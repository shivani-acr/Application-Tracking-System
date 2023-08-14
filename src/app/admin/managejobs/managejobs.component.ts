import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Joblisting } from 'src/app/joblisting';
import { JoblistingService } from 'src/app/services/joblisting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './managejobs.component.html',
  styleUrls: ['./managejobs.component.css'],
})

export class ManagejobsComponent {
  jobdetails: any[] = [];
  constructor(
    private jobListingService: JoblistingService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getJobListing();
  }

  private getJobListing() {
    this.jobListingService.getJobListing().subscribe(
      (data) => {
        this.jobdetails = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToManageJobs() {
    this.router.navigate(['/managejobs']);
  }

  deletejobListing(i: number) {
    Swal.fire({
      title: 'Are You Sure,You want to Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes,Delete',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.jobListingService.deleteJobListing(i).subscribe(
          (data) => {
            console.log('adsfasd');
            this.getJobListing();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  update(i: number) {
        Swal.fire({
          title:'Are You Sure,You want to Edit?',
          icon: 'warning',
          showCancelButton:true,
          confirmButtonText:'Yes',
          cancelButtonText:'No'
        }).then((result)=>{
          if(result.value){
            this.router.navigate(['/post-job/update', i]);
        }
      })
    }

  changestatus(i: number, jobinfo: Joblisting) {
    Swal.fire({
      title: 'Are You Sure,You want to Change Status?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        if (jobinfo.status == 'Active') {
          jobinfo.status = 'Not Active';
          this.jobListingService.updateJobListing(i, jobinfo).subscribe(
            (data) => {
              this.goToManageJobs();
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          jobinfo.status = 'Active';
          this.jobListingService.updateJobListing(i, jobinfo).subscribe(
            (data) => {
              this.goToManageJobs();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    });
  }

}
