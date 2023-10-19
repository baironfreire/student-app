import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StudentService } from './services/student/student.service';
import { QualificationService } from './services/qualification/qualification.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    StudentService,
    QualificationService
  ]
})
export class CoreModule { }
