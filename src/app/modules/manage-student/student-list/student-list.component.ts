import { Component } from '@angular/core';
import { StudentService } from 'src/app/core/services/student/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: any[] = [];

  constructor(
    private studentService: StudentService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      }
    )
  }

  navigateToStudentDetails(student: any) {
    console.log('student', student);
    this.router.navigate(['/student-detail', student.id], { queryParams: { student: JSON.stringify(student) } });
  }

}
