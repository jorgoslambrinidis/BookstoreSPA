import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // props
  loginForm!: FormGroup<any>;
  loginModel = {} as Login;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formValidation();
  }

  formValidation() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.loginModel = {
      username: this.loginForm.value['username'],
      password: this.loginForm.value['password']
    };

    console.log(this.loginModel);

    this.authService.login(this.loginModel).subscribe({
      next: (x: any) => {
        console.log(x);
        localStorage.setItem('token', x.token);
        this.router.navigate(['home']);
      },
      error: () => { },
      complete: () => { },
    });

  }

  cancel() {
    this.router.navigate(['home']);
  }

}
