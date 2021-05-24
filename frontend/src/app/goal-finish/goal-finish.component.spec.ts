import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFinishComponent } from './goal-finish.component';

describe('GoalFinishComponent', () => {
  let component: GoalFinishComponent;
  let fixture: ComponentFixture<GoalFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
