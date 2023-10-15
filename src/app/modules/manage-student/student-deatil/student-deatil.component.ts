import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student/student.service';
import { SharedService } from '../../../shared/services/shared.service';
import { AlertService } from 'src/app/shared/services/alert.service';

export interface IEstudent {
  id:             number;
  name:           string;
  address:        string;
  age:            number;
  qualifications: Qualification[];
}

export interface Qualification {
  id:   number;
  name: string;
}

@Component({
  selector: 'app-student-deatil',
  templateUrl: './student-deatil.component.html',
  styleUrls: ['./student-deatil.component.css']
})


export class StudentDeatilComponent {
  @Input()
  student!: IEstudent;
  idStudent!: number;

  public formEstudent!: FormGroup;

  newQualification!: Qualification;

  constructor(
    private _studentService: StudentService,
    private sharedService: SharedService,
    private _formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private _alertService: AlertService
  ){}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.idStudent = params['id'];
    })    
    this.student = this.sharedService.getSharedData();
    this.formEstudent = this.buildFormEstudent(this._formBuilder);
  }

  public buildFormEstudent(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name:     [null, [Validators.required]],
      age:      [null, [Validators.required]],
      address:  [null, [Validators.required]]
    })
  }

  public onSubmit(): void{   
    if(!this.formEstudent.valid) return;
    this._studentService.updateEstudent(this.idStudent, this.formEstudent.value).subscribe(
      (response) => {
        console.log('respuesta', response);
        if(response){
          this._alertService.openSwal({
            title: "Success",
            text: "Se actualizo la información",
            type: "success"
          })
        }
      },
      (error) => {
        console.log('Error', error);
        this._alertService.openSwal({
          title: "Error",
          text: "Error en la operación, por favor comuniquese con el administrador del sitio",
          type: "error"
        })
      }
    )

  } 

  addQualification() {
    if (this.newQualification) {
      this.student.qualifications.push(this.newQualification);
      this.newQualification = {name: '', id: 0};
    }
  }

  removeQualification(index: number) {
    this.student.qualifications.splice(index, 1);
  }
}
