import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // props
  registerForm!: FormGroup<any>;
  registerModel = {} as Register;

  constructor() { }

  ngOnInit() {
  }

  register() {
    // TODO: Implement registration logic here
  }

  cancel() {

  }

}
