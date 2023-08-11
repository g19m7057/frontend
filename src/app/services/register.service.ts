import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:4000/users/createUser'; 

  constructor(private http: HttpClient) {}

  create(formData: Object): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
