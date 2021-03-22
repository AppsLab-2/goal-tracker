import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  goals!: Goal[];

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(): void {
    this.goalService.getGoals()
        .subscribe(goals => this.goals = goals);
  }

}
