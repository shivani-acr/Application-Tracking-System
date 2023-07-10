import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './managejobs.component.html',
  styleUrls: ['./managejobs.component.css']
 
})
export class ManagejobsComponent {
  
  jobdetails: any[] = [
    {
      jobname: "Project Mangager1",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },
    {
      jobname: "Project Mangager2",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },{
      jobname: "Project Mangager3",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },{
      jobname: "Project Mangager4",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },
    {
      jobname: "Project Mangager5",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },
    {
      jobname: "Project Mangager6",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },
    {
      jobname: "Project Mangager7",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },
    {
      jobname: "Project Mangager8",
      status: "Active",
      totalapplications: "Total Applications Received",
      location:"#location",
      jobID:"Job_id",
      posetedondate:"Poseted On Date"
    },


    
  ];
  changestatus(i:number) {
    if(this.jobdetails[i].status == "Active"){
      this.jobdetails[i].status = "Not Active";
    }
    else{
      this.jobdetails[i].status = "Active";
    }
    
  }
  delete(i:number){
    this.jobdetails.splice(i, 1);
  }
}
