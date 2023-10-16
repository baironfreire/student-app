import { Component, forwardRef, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HelperService } from '../../services/helper.service';




@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormControlErrorComponent)
    }
  ]
})
export class FormControlErrorComponent implements OnInit, ControlValueAccessor {
  @Input()
  formControlName: string;

  @Input()
  className: string;

  control: AbstractControl;
  formError: string;
  customErrorMessages: any;

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer,
    private helper: HelperService
  ) {}
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.control = this.controlContainer.control.get(this.formControlName);
    this.customErrorMessages = this.helper.getCustomErrorMessages(<FormGroup>this.control.parent);

    this.control.statusChanges.subscribe(status => {
      if (this.control.invalid && this.control.touched) {
        Object.keys(this.control.errors).every(errorName => {
          this.formError = this.getErrorMessage(errorName, this.control.errors[errorName]);
          return false;
        });
      } else this.formError = '';
    });
  }

  private getErrorMessage(errorName: string, error: any) {
    if (this.customErrorMessages && this.customErrorMessages[this.formControlName] && this.customErrorMessages[this.formControlName][errorName]) {
      return this.customErrorMessages[this.formControlName][errorName];
    }

    const messages:any = {
      required: () => 'Campo requerido',
      minlength: (params:any) => `Cantidad mínima de carácteres permitidos: ${params.requiredLength}`,
      maxlength: (params:any) => `Cantidad máxima de carácteres permitidos: ${params.requiredLength}`,
      min: (params:any) => `El valor mínimo permitido es ${params.min}`,
      max: (params:any) => `El valor máximo permitido es ${params.max}`,
      minField: (params:any) => `El valor mínimo permitido es ${params.min}`,
      maxField: (params:any) => `El valor máximo permitido es ${params.max}`,
      pattern: (params:any) => `El patrón requerido es: ${params.requiredPattern}`,
      email: (params:any) => `Debe ingresar una cuenta de correo válida`,
      numeric: (params:any) => `Solo valores numéricos permitidos`,
      integer: (params:any) => `Solo valores enteros permitidos`,
      async: (params:any) => `Validación asíncrona fallida`,
      money: (params:any) => `Solo valores monetarios permitidos`,
      date: (params:any) => `Fecha no válida`,
      equalField: (params:any) => `El valor debe ser igual a '${params.equal}'`,
      extension: (params:any) => `Seleccione un archivo con una de las siguientes extensión '${params.extens}'`,
      segments: (params:any) => `La cadena debe contener ${params.cant} segmentos separados por '${params.delimiter}'`,
      finalPeriod: (param:any) => `El periodo final debe ser mayor o igual al periodo inicial`,
      initPeriod: (param:any) => `El periodo inicial debe ser menor o igual al periodo final`,
      largerThan: (params:any) => `El valor debe ser mayor o igual a '${params.equal}'`,
      notspace: (params:any) => `No se permiten espacios en blancos`,
      mismatchePasswords: (params:any) => `La contraseña no coinciden`,
    };

    return messages[errorName].call(this, error);
  }


}
