package com.example.goalTracker.Goals;


public interface GoalService {
    void saveGoal(Goals goals);
    Iterable<Goals> returnUnfinishedGoal();
    Iterable<Goals> returnFinishedGoal();
    void deleteGoal(Integer id);
    Goals getGoal(Integer id);
}
