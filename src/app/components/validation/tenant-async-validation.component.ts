import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenantValidators {
  constructor(private http: HttpClient) {}

  searchTenant(name) {
    // debounce
    return timer(500)
      .pipe(
        switchMap(() => {
          // Check if tenant is available
          return this.http.get<any>(`https://graph.symple.my/license/check-tenant/${name}`);
        })
      );
  }

  tenantValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchTenant(control.value)
        .pipe(
          map(res => {
            console.log('tenantValidator', res);
            // if tenant is already taken
            if (!res.available) {
              // return error
              return { tenantExists: true};
            } else { return null; }
          })
        );
    };
  }
}
