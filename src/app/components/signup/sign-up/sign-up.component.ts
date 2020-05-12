import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGrp: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGrp = this.formBuilder.group({
      companyName: ['', [Validators.required, ValidationService.alpaNumValidator]],
      accountEmail: ['', [Validators.required, ValidationService.emailValidator]],
      accountFirstName: ['', [Validators.required]],
      accountLastName: ['', [Validators.required]],
      terms: ['', Validators.requiredTrue]
    });
  }

  public save(data: NgForm) {
    this.formGrp.markAllAsTouched();

    if (this.formGrp.valid) {
      this.router.navigate(['/setup-account'], {queryParams: data});
    }
  }
}





