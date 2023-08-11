import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UpdateService {

  private apiUrl = 'http://localhost:4000/users/updateUser/'; 

  constructor(private http: HttpClient) {}

  update(formData:Object, email:string): Observable<any> {
    const cred = formData
    return this.http.patch<any>(`${this.apiUrl+email}`, formData);
  }
}
