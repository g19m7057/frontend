import { Component } from '@angular/core';
import { UpdateService } from '../../services/update.service';
import { Update} from '../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor( 
    private fb:FormBuilder, 
    private updateService: UpdateService,
    private router:ActivatedRoute
    )
  {}

  email:any;
  error: Boolean = false;
  userEmail: FormGroup = new FormGroup({});
  updateForm:FormGroup = new FormGroup({});

  ngOnInit() {
		this.updateForm = this.fb.group({
      username: [undefined, []],
			email: [undefined, [
				Validators.email,
			]],
		 	password: [undefined, [ 
				Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
			]],
		});
    this.userEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.router.snapshot.params['email'] !== ':email'? this.email = this.router.snapshot.params['email'] : this.email 
    console.warn(this.email)
  }

  userEmailSubmit(){
    this.email = this.userEmail?.value.email;
  }

  onSubmit(){
    const data:Update = {...this.updateForm?.value}
    console.log(data);
    console.log(this.email)
    this.updateService.update(data, this.email).subscribe(
      (response) => {
        console.warn('Update successful!', response);
      },
      (error) => {
        console.error('Update failed!', error.error);
      }
    );
  }
  
}
