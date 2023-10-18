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

  getStudent(id: number): Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl.student.get_students}/${id}`);
  }
  
  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl.student.post_student, student)
  }

  updateStudent(student: any) {
    return this.http.put(`${this.apiUrl.student.put_student}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl.student.put_student}/${id}`);
  }

  getQualificationsByStudent(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl.student.get_students}/${studentId}/qualifications`); 
  }
}
