import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
  }
  navigateto(i: any) {
    if (i == 1) {
      this.router.navigate(['/dashboard']);
    }
    else if (i == 2) {
      this.router.navigate(['/managejobs']);
    }
  }
}

