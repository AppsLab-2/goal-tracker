package com.example.goalTracker.Goals;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

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
    public Iterable<Goals> returnFinishedGoals(){
        List<Goals> result = StreamSupport.stream(goalRepository.findAll().spliterator(), false).filter(n -> n.isFinished()).collect(Collectors.toList());
        return result;
    }
    @Override
    public void deleteGoal(Integer id){
        goalRepository.deleteById(id);
    }
    @Override
    public Goals getGoal(Integer id){
        return goalRepository.findById(id).get();
    }
    @Override
    public Iterable<Goals> returnGoals(){
        return goalRepository.findAll();
    }

}
