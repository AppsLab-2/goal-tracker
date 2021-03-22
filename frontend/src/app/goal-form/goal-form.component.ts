import { Component} from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent {

  constructor(private goalService:GoalService) { }

  priorites = [ 25, 50, 75, 100 ];

  model = new Goal(11,'Beh', '', 75, '',);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newGoal() {
    this.model = new Goal(11,'', '', 75, '',);
  }

  create():void {
    this.goalService.addGoal(this.model).subscribe();
 }

}
