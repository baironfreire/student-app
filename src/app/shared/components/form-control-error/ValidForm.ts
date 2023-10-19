import { FormGroup, FormControl, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export abstract class  ValidForm{

 


  static numeric(c: FormControl): ValidationErrors {
    const params = {
      numeric: {}
    };
    return c.value === '' || (!isNaN(parseFloat(c.value)) && isFinite(c.value)) ? null : params;
  }

  static emptyNumeric(c: FormControl): ValidationErrors {
    const params = {
      numeric: {}
    };

    if (c.value === '' || c.value === null) {
      return null;
    } else {
      return !isNaN(parseFloat(c.value)) && isFinite(c.value) ? null : params;
    }
  }

  static email(c: FormControl): ValidationErrors {
    const params = {
      email: {}
    };
    return !c.value ||
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        c.value
      )
      ? null
      : params;
  }

  static username(value: number): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
      const params = {
        username: {}
      };

      return c.value === '' || c.value == null || (c.value.length >= value && /\d/.test(c.value)) ? null : params;
    };
  }

  static password(c: FormControl): ValidationErrors {

      const params = {
        password: {}
      };
      return c.value === '' || c.value == null || (c.value.length >= 1  && /^[A-Za-z0-9_]+$/.test(c.value)) ? null : params;
  }

  static equalField(field: string): ValidatorFn {
    return (c: FormControl): ValidationErrors => {
      const sub = c.parent.controls[field].statusChanges.subscribe(val => {
        c.updateValueAndValidity();
        sub.unsubscribe();
      });

      const value = c.parent.controls[field].value;
      const params = {
        equalField: {
          equal: value
        }
      };

      return c.value === value ? null : params;
    };
  }

  static confirmPassword(field_name: string): ValidatorFn {
    return (control: FormControl): { [key: string]: any } => {
      let password = control.value;
      let isvalid = control.root.value[field_name] == password
      if (!isvalid) {
        return { mismatchePasswords: true }
      } else {
        return null;
      }
    }
  }

  static generic(c: FormControl, regExp: RegExp): ValidationErrors {
    const params = {
      generic: {}
    };
    return !c.value || regExp.test(c.value) ? null : params;
  }

  static creditExpireDate(c: FormControl): ValidationErrors {
    const params = {
      expire: {}
    };
    return !c.value || /^(\d{4})(\/)(0[1-9]|1[0-2])$/.test(c.value) ? null : params;
  }

  static limit(c: FormControl): ValidationErrors {
    const params = {
      specialty: {}
    };
    return !c.value || c.value.length <= 5 ? null : params;
  }

}