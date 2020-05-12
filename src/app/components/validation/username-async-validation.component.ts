import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidators {
  constructor(private http: HttpClient) {}

  searchUser(name) {
    // debounce
    return timer(500)
      .pipe(
        switchMap(() => {
          // Check if username is available
          return this.http.get<any>(`https://graph.symple.my/license/check-username/${name}`);
        })
      );
  }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUser(control.value)
        .pipe(
          map(res => {
            console.log('usernameValidator', res);
            // if username is already taken
            if (!res.available) {
              // return error
              return { userNameExists: true};
            } else { return null; }
          })
        );
    };
  }
}
