import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = environment.API;

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl.student.get_students)
  }

  updateEstudent(id: number, student: any) {
    return this.http.put(`${this.apiUrl.student.put_student}/${id}`, student);
  }
}
