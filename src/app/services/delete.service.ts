import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private apiUrl = 'http://localhost:4000/users/deleteUser/'; 

  constructor(private http: HttpClient) {}

  delete(email:String): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+email}`).pipe(
      catchError((error) => {
        console.log('Error occured', error);
        throw error
      })
    )
  }
}
