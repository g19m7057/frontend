import { Component } from '@angular/core';
import { DeleteService } from '../../services/delete.service';
import { Email } from '../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
  
  constructor(private fb: FormBuilder, private deleteService: DeleteService) {}
  
  deleteForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.deleteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    }); // Initialize the form in ngOnInit
  }

  onSubmit(){
    const userEmail:Email = {...this.deleteForm?.value};

    this.deleteService.delete(userEmail.email).subscribe(
      (response) => {
        console.warn('Delete successful!', response);
      },
      (error) => {
        console.error('Delete failed!', error);
      }
    );
  }
}
