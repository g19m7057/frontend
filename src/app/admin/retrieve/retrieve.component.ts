import { Component } from '@angular/core';
import { RetrieveService } from '../retrieve-service.service';
import { DeleteService } from 'src/app/services/delete.service';
import { UrlSegment } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
  users: any;
  userEmail: String = ''
  deleteUser: Boolean = false;
  userDeleted: Boolean = false;

  constructor(
    private retrieve: RetrieveService, 
    private deleteService:DeleteService
    )
  {
    this.loadUsers()
  }

  loadUsers(){
    this.retrieve.fetchData().subscribe(
      (res) => {
        this.users = res;
      }
    )
  }

  setEmail(userEmail:String){
    this.userEmail = userEmail;
    this.deleteUser = true;
    console.warn(this.userEmail)
  }

  delUser(bool:Boolean){
    if(bool){
      this.delete(this.userEmail);
      this.deleteUser = false;
    }
    else{
      this.deleteUser = false
    }
  }
  
  delete(userEmail:String){

    this.deleteService.delete(userEmail).subscribe(
      (response) => {
        this.loadUsers()
        this.userDeleted = true;
        console.warn('Delete successful!', response);
      },
      (error) => {
        console.error('Delete failed!', error);
      }
    );
  }

}
