import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["homepage"]);}
    else if (this.username == 'user' && this.password == 'user'){
    this.router.navigate(["homepage"]);}
    else {
      alert("Username or password are invalid");
    }
  }
}