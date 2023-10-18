import { Component, Input } from '@angular/core';


import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student/student.service';
import { SharedService } from '../../../shared/services/shared.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IEstudent {
  studentId:      number;
  name:           string;
  address:        string;
  age:            number;
  qualifications: Qualification[];
}

export interface Qualification {
  qualificationsId: number;
  subject: string,
  qualification: number,
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
    private _studentService: StudentService,
    private sharedService: SharedService,
    private _formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private _alertService: AlertService
  ){

  }

  async ngOnInit() {
    this.router.params.subscribe((params) => {
      this.idStudent = params['id'];
      this._studentService.getQualificationsByStudent(this.idStudent).subscribe(
        (data:any) => {
          this.student.qualifications = data.qualifications
        }
      )
      
    })    
    this.student = this.sharedService.getSharedData();
    console.log('recuperado', this.student);
    if(!this.student){
      await this._studentService.getStudent(this.idStudent).subscribe(
        (student:any) => {
          console.log('estiden get', student);
          this.student = student;
          this.formEstudent = this.buildFormEstudent(this._formBuilder, this.student);
        }
      )
    }else{
      this.formEstudent = this.buildFormEstudent(this._formBuilder, this.student);
    }
    
   
    this.initQualification();
  }

  

  public initQualification(){
    this.newQualification = {
      qualificationsId: 0,
      subject: '',
      qualification: 0
    }
  }

  public buildFormEstudent(formBuilder: FormBuilder, student:any): FormGroup {
    console.log('estuden llega al build', student);
    
    return formBuilder.group({
      studentId:[student.studentId, [Validators.required]],
      name:     [student.name, [Validators.required]],
      age:      [student.age, [Validators.required]],
      address:  [student.address, [Validators.required]]
    })
  }

  public onSubmit(): void{   
    if(!this.formEstudent.valid) return;
    this._studentService.updateStudent(this.formEstudent.value).subscribe(
      (response:any) => {
     
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

  onSumbiQualification() {
    console.log('newQualification', this.newQualification);
    
    if (this.newQualification) {
      this.student.qualifications.push(this.newQualification);
      this.newQualification = {subject: '', qualificationsId: 0, qualification: 0};
    }
  }

  removeQualification(index: number) {
    this._alertService.openConfirmsSwal({
      title: "Confirmar!",
      text: "¿Esta seguro de eliminar?",
      type: "warning",
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      allowEscapeKey: false,
      handlerConfirm: () => {
        this.student.qualifications.splice(index, 1);
      },
      handlerCancel: () => {

      }
    })
  }
}
