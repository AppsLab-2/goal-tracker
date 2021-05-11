import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent implements OnInit {
  goal!: Goal;

  constructor(
    private route: ActivatedRoute,
    private goalService: GoalService,
    private location: Location
  ) { }

  priorites = [ 5, 4, 3, 2, 1 ];

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    this.getGoal();
  }

  getGoal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.goalService.getGoal(id)
      .subscribe(goal => this.goal = goal);
  }

  save(): void {
    this.goalService.updateGoal(this.goal)
      .subscribe(() => this.cancel());
  }

  cancel(): void {
    this.location.back();
  }

}

