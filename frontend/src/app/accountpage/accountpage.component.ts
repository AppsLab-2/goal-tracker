import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
  users!: User[];
  
  name: User[];
  surName: User[];
  userName: User[];
  password: User[];
  email: User[];
  phoneNumber: User[];

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.goalService.getUsers()
        .subscribe(users => this.users = users);
  }

}
