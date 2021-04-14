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
    @Override
    public Iterable<Goals> returnGoal(){
        return goalRepository.findAll();
    }
    @Override
    public void deleteGoal(Integer id){
        goalRepository.deleteById(id);
    }
    @Override
    public Goals getGoal(Integer id){return goalRepository.findById(id).get();}
}
