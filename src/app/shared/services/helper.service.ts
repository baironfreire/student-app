import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public setCustomErrorMessages(messages: any, form: FormGroup) {
    (<any>form)._customErrors = messages;
  }

  public getCustomErrorMessages(form: FormGroup) {
    return (<any>form)._customErrors;
  }

  public getErrorsHttpRequest(data: object): string {
    let m: string = '';
     Object.values(data).forEach((error: any) => {
          console.log('Mensaje Error', error.message);
          m += `<p class="text-danger"> ${error.message} </p>`;
    });
    return m;
  }

  public checkValidators(form:any, controlName:any, validators?:any) {
    if (validators) {
      form.get(`${controlName}`).setValidators(validators);
    } else {
      form.get(`${controlName}`).clearValidators();
    }
    form.updateValueAndValidity();
  }


  


}
