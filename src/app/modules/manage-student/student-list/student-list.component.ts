import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student/student.service';
import { SharedService } from '../../../shared/services/shared.service';
import { AlertService } from 'src/app/shared/services/alert.service';


export interface IEstudent {
  id: number;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  displayedColumns: string[] = ['name', 'id']
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private _router: Router,
    private _studentService: StudentService,
    private sharedService: SharedService,
    private _alertService: AlertService
  ){}

  ngOnInit(){
    this.fillTable();
  }

  public async fillTable(){
    this._studentService.getStudents().subscribe((response:any)=>{
      console.log('resp', response.students);
      if(response.code == 'SUCCESSFUL_OPERATION'){
        this.dataSource = new MatTableDataSource<IEstudent>(response.students);
      }else{
        this.dataSource = new MatTableDataSource<IEstudent>([]);
        this._alertService.openConfirmsSwal({
          title: 'Información!',
          text: 'No se encontro información, ¿Desea registrar un estudiante?',
          type: 'warning',
          confirmButtonText: 'Si',
          cancelButtonText: 'No',
          showCancelButton: true,
          handlerConfirm: () => {
            this._router.navigate(['/student-add'])
          }
        })
      }
    })
  }

  navigateToStudentDetails(student: any) {
    console.log('student >>>>', student);
    
    this.sharedService.setSharedData(student);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public removeStudent(id: number){
    this._studentService.deleteStudent(id).subscribe(
      (reponse: any) => {
        if(reponse.code=='SUCCESSFUL_OPERATION'){
          this.fillTable();
        }else{
          this._alertService.openSwal({
            title: 'Error!',
            text: 'Se produjo un error en la operación, por favor contacte al administrador del sitio',
            type: 'error'
          });
        }
      },
      (error) => {
        console.log('error', error);
        
        this._alertService.openSwal({
          title: 'Error!',
          text: 'Se produjo un error en la operación, por favor contacte al administrador del sitio',
          type: 'error'
        });
      }
    )
  }

}
