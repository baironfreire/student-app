import { Component } from '@angular/core';
import { StudentService } from 'src/app/core/services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: any[] = [];

  constructor(
    private studentService: StudentService
  ){}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      }
    )
  }

}
