import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student/student.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  public formStudentSave!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _studentService: StudentService,
    private _alertService: AlertService,
    private _router: Router
  ){
    this.formStudentSave = this.buildFormEstudent(this._formBuilder)
  }

  public buildFormEstudent(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name:     [null, [Validators.required]],
      age:      [null, [Validators.required]],
      address:  [null, [Validators.required]]
    });
  }


  onSaveStudent() {
    if(!this.formStudentSave.validate()) return;
    this._studentService.addStudent(this.formStudentSave.getRawValue()).subscribe(
      (student:any) => {
        this._alertService.openConfirmsSwal({
          title: "Success",
          text: 'Registro Exitoso!, (Desea ir a la lista de estudiantes)',
          type: 'success',
          showCancelButton: true,
          cancelButtonText: 'No',
          confirmButtonText: 'Si',
          handlerConfirm: () => {
            this._router.navigate(['/student-list'])
          }
        });
      },
      (error: any) => {
        console.log('error', error);
        
        this._alertService.openSwal({
          title: 'Error!',
          text: "Se presento un error",
          type: 'error'
        })
      }
    )
  }
}
