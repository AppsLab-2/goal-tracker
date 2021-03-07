package com.example.goalTracker;

import org.springframework.stereotype.Service;

@Service
public class GoalServiceImpl implements GoalService{

    GoalRepository goalRepository;

    public GoalServiceImpl(GoalRepository goalRepository){
        this.goalRepository = goalRepository;

    }

    @Override
    public void saveGoal(Goals goals) {
        goalRepository.save(goals);
    }
}
