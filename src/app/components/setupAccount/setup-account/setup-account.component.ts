import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ValidationService } from 'src/app/services/validation.service';
import { TenantValidators } from '../../validation/tenant-async-validation.component';

@Component({
  selector: 'app-setup-account',
  templateUrl: './setup-account.component.html',
  styleUrls: [ './setup-account.component.css' ],
  providers: [],
  styles: [`
    .location_input {
      background-image: url(assets/images/location.svg);
      background-size: 26px 20px;
      background-repeat: no-repeat;
      background-position: right;
    }
  `]
})

export class SetupAccountComponent implements AfterViewInit, OnDestroy, OnInit {
  formGrp: FormGroup;
  queryParamsData: {};
  invalid: any = {};
  timezones = [
    { label: '(GMT)       Universal Coordinated Time', value: '0' },
    { label: '(GMT+1:00)  European Central Time', value: '1' },
    { label: '(GMT+2:00)  Eastern European Time', value: '2' },
    { label: '(GMT+3:00)  Eastern African Time', value: '3' },
    { label: '(GMT+3:50)  Middle East Time', value: '3.5' },
    { label: '(GMT+4:00)  Near East Time', value: '4' },
    { label: '(GMT+5:00)  Pakistan Lahore Time', value: '5' },
    { label: '(GMT+5:30)  India Standard Time', value: '5.5' },
    { label: '(GMT+6:00)  Bangladesh Standard Time', value: '6' },
    { label: '(GMT+7:00)  Vietnam Standard Time', value: '7' },
    { label: '(GMT+8:00)  China Taiwan Time', value: '8' },
    { label: '(GMT+9:00)  Japan Standard Time', value: '9' },
    { label: '(GMT+9:30)  Australia Central Time', value: '9.5' },
    { label: '(GMT+10:00) Australia Eastern Time', value: '10' },
    { label: '(GMT+11:00) Solomon Standard Time', value: '11' },
    { label: '(GMT+12:00) New Zealand Standard Time', value: '12' },
    { label: '(GMT-11:00) Midway Islands Time', value: '-11' },
    { label: '(GMT-10:00) Hawaii Standard Time', value: '-10' },
    { label: '(GMT-9:00)  Alaska Standard Time', value: '-9' },
    { label: '(GMT-8:00)  Pacific Standard Time', value: '-8' },
    { label: '(GMT-7:00)  Mountain Standard Time', value: '-7' },
    { label: '(GMT-6:00)  Central Standard Time', value: '-6' },
    { label: '(GMT-5:00)  Eastern Standard Time', value: '-5' },
    { label: '(GMT-4:00)  Puerto Rico and US Virgin Islands Time', value: '-4' },
    { label: '(GMT-3:00)  Canada Newfoundland Time', value: '-3' },
    { label: '(GMT-2:00)  Argentina Standard Time', value: '-2' },
    { label: '(GMT-1:00)  Central African Time', value: '-1' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private service: TenantValidators
  ) {
    this.route.queryParams.subscribe(itm => {
        this.queryParamsData = itm;
    });
  }

  ngOnInit() {
    this.formGrp = this.fb.group({
      tenant: [null, Validators.compose([ Validators.required, Validators.minLength(3)]), this.service.tenantValidator()],
      timezone: ['8', [Validators.required]],
      companyAddress: ['', [Validators.required]],
      companyEmail: ['', [Validators.required, ValidationService.emailValidator]],
      companyPhone: ['', [Validators.required, ValidationService.numberValidator]],
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy() { }

  setup() {
    console.log(this.formGrp.value);
    console.log(this.formGrp.valid);
    const data = this.formGrp.value;

    const object = {...this.queryParamsData, ...data };

    this.router.navigate(['/setup-admin'], {queryParams: object});
  }
}

