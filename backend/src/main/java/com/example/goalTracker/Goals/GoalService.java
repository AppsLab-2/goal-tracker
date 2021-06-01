package com.example.goalTracker.Goals;


public interface GoalService {
    void saveGoal(Goals goals);
    Iterable<Goals> returnFinishedGoals();
    Iterable<Goals> returnGoals();
    void deleteGoal(Integer id);
    Goals getGoal(Integer id);
}
