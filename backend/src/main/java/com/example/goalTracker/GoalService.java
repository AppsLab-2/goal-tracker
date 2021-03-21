package com.example.goalTracker;

public interface GoalService {
    void saveGoal(Goals goals);
    Iterable<Goals> returnGoal();
}
