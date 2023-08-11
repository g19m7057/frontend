import { Component } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';
import { Email } from '../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
  constructor(private fb: FormBuilder, private retrieveService: RetrieveService) {}
  
  retrieveForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.retrieveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    }); // Initialize the form in ngOnInit
  }

  onSubmit() {
    const userEmail:Email = {...this.retrieveForm?.value};
    this.retrieveService.fetchData(userEmail.email).subscribe(
      (response) => {
        console.warn(response)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
