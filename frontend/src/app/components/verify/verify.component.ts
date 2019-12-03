import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  verifyForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.verifyForm = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.verifyForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.verifyForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.verify(this.verifyForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Your account has been verified. Welcome to UR Connected :)', true);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          if (error.status === 404) {
            this.alertService.error('Incorrect code, please try again!');
          }
          this.loading = false;
        });
  }
}
