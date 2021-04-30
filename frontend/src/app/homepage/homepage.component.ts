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
  sortBy: string = 'ID';
  doBy: string;
  route: any;
  goal: Goal;

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

  do(doBy: string, goal: Goal){
    this.doBy = doBy
    
  if(this.doBy === 'Delete'){
    this.goals = this.goals.filter(h => h !== goal);
    this.goalService.deleteGoal(goal).subscribe();
  }

  if(this.doBy === 'Finish'){
    
  }

}
}



