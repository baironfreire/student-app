import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://my-json-server.typicode.com/baironfreire/json-server/students'

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
