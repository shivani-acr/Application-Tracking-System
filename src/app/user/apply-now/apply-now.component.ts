
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  myForm: any;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }
  fileName = ''
  ngOnInit() {
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      currentlocation: ['', [Validators.required]],
      availabilityfrom: ['', [Validators.required]],
      acceptedpolicy: ['', [Validators.required]],
      are_you_a_previous_employee: ['', [Validators.required]],
      file: [null, Validators.required],
      EmailID: ['', [Validators.required]],
      Address: ['', [Validators.required]]

    });
  }
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileName = file.name;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.myForm.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
  saveForm() {
    if (this.myForm.valid) {
      console.log('Profile form data :: ', this.myForm.value);
    }
  }
}
