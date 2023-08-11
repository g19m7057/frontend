import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:4000/users/loginUser'; 

  constructor(private http: HttpClient) {}

  login(email:string, password:string): Observable<any> {
    const cred = {email, password}
    return this.http.post<any>(this.apiUrl, cred).pipe(
      catchError((error) => {
        console.warn(error);
        throw error;
      })
    )
  }
}
