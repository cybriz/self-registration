import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ValidationService } from 'src/app/services/validation.service';
import { UsernameValidators } from 'src/app/components/validation/username-async-validation.component';

@Component({
  selector: 'app-setup-admin',
  templateUrl: './setup-admin.component.html',
  styleUrls: ['./setup-admin.component.css']
})

export class SetupAdminComponent implements AfterViewInit, OnDestroy, OnInit {
  formGrp: FormGroup;
  queryParamsData = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private service: UsernameValidators
  ) {
    this.route.queryParams.subscribe(itm => {
        this.queryParamsData = itm;
    });
  }

  ngOnInit() {
    this.formGrp = this.fb.group({
      userName: [null, Validators.compose([ Validators.required, Validators.minLength(3)]), this.service.usernameValidator()],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validator: ValidationService.confirmPasswordValidator
      });
  }

  ngAfterViewInit() {}

  ngOnDestroy() { }

  done() {
    const data = this.formGrp.value;

    delete data.confirmPassword;
    const object = {...this.queryParamsData, ...data };

    delete object.terms;

    console.log('final_object', object);
    this.createFreemiumAccount(object);

    this.router.navigate(['/congratulation']);
  }

  createFreemiumAccount(data): Observable<any> {
    const url = 'https://graph.symple.my/license';

    return this.http
        .post(url, data)
        .pipe(
            catchError(this.onError)
        );
  }

  private onError(err: HttpErrorResponse): Observable<string> {
    const errorMessage = err;
    return throwError(errorMessage);
  }
}
