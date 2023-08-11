import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Register } from 'src/app/interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(
    private fb: FormBuilder, 
    private registerService: RegisterService,
    private router:Router
    ) { }
  
  registerForm: FormGroup = new FormGroup({});

  ngOnInit() {
		this.registerForm = this.fb.group({
      username: ['', [
				Validators.required, 
			]],
			email: ['', [
				Validators.required, 
				Validators.email,
			]],
		 	password: ['', [
				Validators.required,  
				Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
			]],
		}); // Initialize the form in ngOnInit
	  }

  registered = false;
  registerMessage:string = ''

  onSubmit(){
    const user:Register = {...this.registerForm?.value}
    this.registerService.create(user).subscribe(
      (response) => {
        this.registered = true;
        this.registerMessage = response.message;
        console.warn('Register successful!', response);
        this.router.navigate(['/user/home']); // Replace 'dashboard' with the route path you defined
  
      },
      (error) => {
        console.error('Registration failed!', error);
      }
    );
  }
} 
