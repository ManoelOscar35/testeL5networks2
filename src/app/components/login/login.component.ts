import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  login() {
    this.router.navigate(['/dashboard']);
  }
}
