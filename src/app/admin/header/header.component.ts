import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuVariable: boolean = false;
  constructor(private router: Router) {}
  openMenu() {
    this.menuVariable = !this.menuVariable;
  }
  navigateto(i: any) {
    if (i == 1) {
      this.router.navigate(['/dashboard']);
    } else if (i == 2) {
      this.router.navigate(['/managejobs']);
    } else if (i == 3) {
      this.router.navigate(['/post-job']);
    }
    else if (i == 4){
      this.router.navigate(['/admin']);
    }
    else if (i == 5){
      this.router.navigate(['/view-applications']);
    }
  }
}
