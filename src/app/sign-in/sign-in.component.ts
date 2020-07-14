import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userInfo = {
    userName: 'tiepphan',
    password: '',
    rememberMe: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
