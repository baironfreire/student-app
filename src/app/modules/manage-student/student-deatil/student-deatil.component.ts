import { Component, Input } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

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

  newQualification!: Qualification;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const studentData = this.route.snapshot.queryParams
    if(studentData && studentData['student']){
      this.student = JSON.parse(studentData['student'])
      console.log('this', this.student);
    }
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
