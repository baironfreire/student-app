import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  private apiUrl = environment.API;

  constructor(private http: HttpClient) { }

  public save(data:any): Observable<any>{
    return this.http.post(this.apiUrl.qualification.saveQualification, data);
  }

  public delete(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl.qualification.deleteQualification}/${id}`);
  }

}
