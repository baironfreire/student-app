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
    return this.http.get<any[]>(this.apiUrl.student.listStudents)
  }

  getStudent(id: number): Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl.student.getStudent}/${id}`);
  }
  
  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl.student.saveStudent, student)
  }

  updateStudent(student: any) {
    return this.http.put(`${this.apiUrl.student.updateStudent}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl.student.deleteStudent}/${id}`);
  }

  getQualificationsByStudent(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl.student.getStudentWithQualifications}/${studentId}/qualifications`); 
  }
}
