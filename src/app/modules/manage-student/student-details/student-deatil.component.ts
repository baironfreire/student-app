import { Component, Input } from '@angular/core';


import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student/student.service';
import { SharedService } from '../../../shared/services/shared.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidForm } from 'src/app/shared/components/form-control-error/ValidForm';
import { QualificationService } from 'src/app/core/services/qualification/qualification.service';

export interface IEstudent {
  id:      number;
  name:           string;
  address:        string;
  age:            number;
  qualifications: Qualification[];
}

export interface Qualification {
  id: number;
  qualificationName: string;
  studentId: number;
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
  public qualificationsList: Array<Qualification>;

  constructor(
    private sharedService: SharedService,
    private _formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private _alertService: AlertService,
    private _studentService: StudentService,
    private _qualificationService: QualificationService
  ){

  }

  ngOnInit() {
    this.loadInfoDetail();
  }

  
  public loadInfoDetail(){
    this.router.params.subscribe((params) => {
      this.idStudent = params['id'];
      this._studentService.getQualificationsByStudent(this.idStudent).subscribe(
        (response:any) => {
          if(response.code == "SUCCESSFUL_OPERATION"){
            this.student = response.student;
            this.formEstudent = this.buildFormEstudent(this._formBuilder, this.student);
            this.initQualification();
          }else{
            this._alertService.openSwal({
              title: 'Error!',
              text: 'Se presento un error en la operación',
              type: 'error'
            })
          }
        }
      )
    })  
  }
  public initQualification(){
    this.newQualification = {
      id: 0,
      qualificationName: '',
      studentId: this.student.id
    }
    console.log('qualifications', this.newQualification);
    
  }

  public buildFormEstudent(formBuilder: FormBuilder, student:any): FormGroup {
    console.log('estuden llega al build', student);
    
    return formBuilder.group({
      id:       [student.id, [Validators.required]],
      name:     [student.name, [Validators.required, Validators.maxLength(50)]],
      age:      [student.age, [Validators.required, Validators.min(5), ValidForm.numeric]],
      address:  [student.address, [Validators.required]]
    })
  }

  public onSubmit(): void{   
    if(!this.formEstudent.valid) return;
    this._studentService.updateStudent(this.formEstudent.value).subscribe(
      (response:any) => {
     
        if(response.code == "SUCCESSFUL_OPERATION"){
          this._alertService.openSwal({
            title: "Success",
            text: "Se actualizo la información",
            type: "success"
          })
        }else{
          this._alertService.openSwal({
            title: "Error",
            text: "Error en la operación, por favor comuniquese con el administrador del sitio",
            type: "error"
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

  onSumbiQualification() {
    console.log('newQualification', this.newQualification);
    
    if (this.newQualification.qualificationName != '') {
      this._qualificationService.save(this.newQualification).subscribe(
        (response:any) => {
          console.log('respuesta', response);
          
          if(response.code == 'CREATED'){
            this.student.qualifications.push(response.qualification);
            this.newQualification = {qualificationName: '', id: 0, studentId: this.student.id};
          }else{
            this._alertService.openSwal({
              title: 'Error!',
              text: 'Se produjo un error en la operación, por favor contacte al administrador del sitio',
              type: 'error'
            });
          }
          
        },
        (error) => {
          this._alertService.openSwal({
            title: 'Error!',
            text: 'Se produjo un error en la operación, por favor contacte al administrador del sitio',
            type: 'error'
          });
        }
      )
      
    }else{
      this._alertService.openSwal({
        title: 'Error!',
        text: 'Ingrese el nombre de la cualificación',
        type: 'error'
      });
    }
  }

  removeQualification(index: number, id: number) {
    this._alertService.openConfirmsSwal({
      title: "Confirmar!",
      text: "¿Esta seguro de eliminar?",
      type: "warning",
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      allowEscapeKey: false,
      handlerConfirm: () => {
        this._qualificationService.delete(id).subscribe(
          (response:any) => {
            if(response.code == 'SUCCESSFUL_OPERATION'){
              this.student.qualifications.splice(index, 1);
            }else{
              this._alertService.openSwal({
                title: 'Error!',
                text: 'Se produjo un error en la operación, por favor contacte al administrador del sitio',
                type: 'error'
              });
            }
          }
        )
      },
      handlerCancel: () => {

      }
    })
  }
}
