import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class RetrieveService {

  private apiUrl = 'http://localhost:4000/users/getUser/'; 

  constructor(private http: HttpClient) {}

  fetchData(email:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+email}`);
  }
}
