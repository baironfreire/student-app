import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student/student.service';
import { SharedService } from '../../../shared/services/shared.service';


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
    private _studentService: StudentService,
    private sharedService: SharedService
  ){}

  ngOnInit(): void {
    this._studentService.getStudents().subscribe(
      (data) => {
        console.log('students', data);
        this.dataSource = new MatTableDataSource<IEstudent>(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  navigateToStudentDetails(student: any) {
    console.log('student >>>>', student);
    
    this.sharedService.setSharedData(student);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
