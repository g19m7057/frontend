import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { Login } from '../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
	constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) { } 

	loginForm: FormGroup = new FormGroup({});

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['', [
				Validators.required, 
				Validators.email,
			]],
		 	password: ['', [
				Validators.required,  
			]],
		}); // Initialize the form in ngOnInit
	  }

  isError = false;
  error: any
  token: string = '';
  loginMessage : string = '';
  loggedIn = false;

  onSubmit(){
	  const user:Login = {...this.loginForm?.value}

    this.loginService.login(user.email, user.password).subscribe(
      (response) => {
		    this.loggedIn = true;
        this.loginMessage = response.message;
        this.token = response.token;
        localStorage.setItem('jwToken', this.token)
        console.warn('Login successful!');
        this.router.navigate(['/user/home'])
      },
      (error) => {
        this.isError = true;
        this.error = error.error ? error.error : error;
        console.error('Login failed!', error.error);
      }
    );
  }
}
