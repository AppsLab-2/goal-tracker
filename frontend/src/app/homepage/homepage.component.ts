import { Component, Inject, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  goals!: Goal[];
  sortBy: string = 'ID';
  doBy: string;
  finished: boolean;
  goal: any;
  control:boolean


  constructor(
    private goalService: GoalService,
    public dialog: MatDialog) { }

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
    let dialogRef = this.dialog.open(DeleteDialog,  {data: {}});
    dialogRef.afterClosed().subscribe(result => {
      if(result.control == true){
      this.goals = this.goals.filter(h => h !== goal);
      this.goalService.deleteGoal(goal).subscribe();
      }
    });
    
    //this.goals = this.goals.filter(h => h !== goal);
    //this.goalService.deleteGoal(goal).subscribe();  
    
  }

  if(this.doBy === 'Finish'){
    goal.finished = true;
    console.log("buus");
    this.goalService.updateGoal(goal).subscribe();

  }

  }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
  styleUrls: ['delete-dialog.css']
})
export class DeleteDialog {

  goals!: Goal[];



  constructor(
    private goalService: GoalService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  delete(): void {
    this.data.control = true;
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.data.control = false;
    this.dialogRef.close(this.data);
  }
}

