package com.example.goalTracker;

public interface GoalService {
    void saveGoal(Goals goals);
    Iterable<Goals> returnGoal();
    void deleteGoal(Integer id);
    Goals getGoal(Integer id);
}
