import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})

export class LoginpageComponent implements OnInit {
  adminForm: any;
  checkvariable = false;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }
  ngOnInit() {
    this.adminForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    const isAuthenticated = this.authService.login(this.adminForm.value.username, this.adminForm.value.password);
    if (isAuthenticated) {
      this.router.navigateByUrl('/dashboard');
    }
    else{
      this.checkvariable = true;
    }
  }
}


