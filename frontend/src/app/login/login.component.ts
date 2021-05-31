import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoalService } from '../goal.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  constructor(
    private readonly goalService: GoalService,
    private readonly router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.loginGroup.valid) {
      const username = this.loginGroup.value.username;
      const password = this.loginGroup.value.password;
      this.goalService.login(username, password)
        .subscribe(() => this.router.navigateByUrl('/homepage'));
    }
    else {
      alert("Username or password are invalid");
    }
  }
}