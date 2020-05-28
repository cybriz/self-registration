import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';
import { TenantValidators } from '../../validation/tenant-async-validation.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
declare const google: any;

@Component({
  selector: 'app-setup-account',
  templateUrl: './setup-account.component.html',
  styleUrls: ['./setup-account.component.css'],
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
  suggestion: any[] = [];

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
      tenant: ['', Validators.compose([Validators.required, ValidationService.alpaNumValidator]), this.service.tenantValidator()],
      timezone: ['8', [Validators.required]],
      companyAddress: ['', [Validators.required]],
      companyEmail: ['', [Validators.required, ValidationService.emailValidator]],
      companyPhone: ['', [Validators.required, ValidationService.numberValidator]],
    });

    this.formGrp.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(x => {
        if (x) {
          this.http.get<any>(`https://graph.symple.my/license/check-tenant/${x.tenant}`).subscribe(res => {
            this.suggestion = [];
            for (let i = 0; i < 3; i++) {
              if (res.suggestion) { this.suggestion.push(res.suggestion[i]); }
            }
          });
        }
      });

    this.initAutocomplete();
  }

  ngAfterViewInit() { }

  ngOnDestroy() { }

  setup() {
    const data = this.formGrp.value;

    const object = { ...this.queryParamsData, ...data };

    this.router.navigate(['/setup-admin'], { queryParams: object });
  }

  initAutocomplete() {
    const acInputs = document.getElementsByClassName('autocomplete');

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < acInputs.length; i++) {
      const autocomplete = new google.maps.places.Autocomplete(acInputs[i]);
      autocomplete.inputId = acInputs[i].id;

      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          // do nth
      });
    }
  }
}

