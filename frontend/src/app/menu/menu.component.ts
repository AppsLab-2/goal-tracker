import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
  }

}
