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

  constructor(
    private route: ActivatedRoute,
    private goalService: GoalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGoal();
  }

  getGoal(): void {

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.goalService.updateGoal(this.goal)
      .subscribe(() => this.goBack());
  }

}
