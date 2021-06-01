import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-finish',
  templateUrl: './goal-finish.component.html',
  styleUrls: ['./goal-finish.component.css']
})
export class GoalFinishComponent implements OnInit {
  goals!: Goal[];
  sortBy: string = 'ID';
  finished: boolean;

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(): void {

    this.goalService.getGoals()
        .subscribe(goals => this.goals = goals);

  }

  sort(sortBy: string) {
    this.sortBy = sortBy

    if(this.sortBy === 'Name')
      this.goals.sort((a,b) => a.name.localeCompare(b.name));

    if(this.sortBy === 'ID')
      this.goals.sort((a,b) => a.id > b.id ? 1 : -1);

    if(this.sortBy === 'Priority')
      this.goals.sort((a,b) => b.priority > a.priority ? 1 : -1);

      if(this.sortBy === 'Date')
      this.goals.sort((a,b) => a.date.localeCompare(b.date));
  }
}
