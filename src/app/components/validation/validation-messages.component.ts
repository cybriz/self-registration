import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'validation-messages',
    template: `<small class="form-text text-danger" style="font-size: small;" *ngIf="errorMessage">{{errorMessage}}</small>`
})
export class ValidationMessagesComponent {
    @Input() control: FormControl;

    constructor() {
    }

    get errorMessage() {
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}