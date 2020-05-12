import { AbstractControl } from '@angular/forms';

export class ValidationService {
    // function to set error messages
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            required: 'This field is required',
            twoDecimalAllowed: 'Decimal value upto 2 decimal places is allowed.',
            invalidNumber: 'Input should be an integer value',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'New password and confirm password does not match',
            alphaNumericAllowed: 'Only apha numeric input is allowed',
            numericAllowed: 'Only numeric values are allowed',
            emailTaken: 'Email id already taken',
            minlength: `Minimum length should be ${validatorValue.requiredLength} characters`,
            maxlength: `Maximum length should be ${validatorValue.requiredLength} characters`
        };

        return config[validatorName];
    }

    static emailValidator(control: AbstractControl) {
        // tslint:disable-next-line: max-line-length
        if (control.value.length === 0 || control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { invalidEmailAddress: true };
        }
    }

    static alpaNumValidator(control: AbstractControl) {
        if (control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
        } else {
            return { alphaNumericAllowed: true };
        }
    }


    static numberValidator(control: AbstractControl) {
        if (control.value.length === 0 || control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return { numericAllowed: true };
        }
    }


    static decimalValidation(control: AbstractControl) {
        if (control.value.match(/^\d*\.?\d{0,2}$/g)) {
            return null;
        } else {
            return { twoDecimalAllowed: true };
        }
    }

    static confirmPasswordValidator(control: AbstractControl) {
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ invalidPassword: true });
        }
        return null;
    }

}