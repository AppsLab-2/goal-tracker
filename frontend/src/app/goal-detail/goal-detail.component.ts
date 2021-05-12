import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  goal!: Goal;
  goals!: Goal[];

  constructor(
    private route: ActivatedRoute,
    private goalService: GoalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGoal();
  }

  getGoal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.goalService.getGoal(id)
      .subscribe(goal => this.goal = goal);
  }

  home(): void {
    this.location.back();
  }

  delete(goal: Goal): void{
    this.goals = this.goals.filter(h => h !== goal);
    this.goalService.deleteGoal(goal).subscribe();
  }

}
