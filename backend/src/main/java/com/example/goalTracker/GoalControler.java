package com.example.goalTracker;

import org.springframework.web.bind.annotation.*;

@RestController
public class GoalControler {
    GoalService goalService;
    public GoalControler(GoalService goalService){
        this.goalService = goalService;
    }
    @GetMapping("/api/goals")
    public Iterable<Goals> mainPage(){
        return (goalService.returnGoal());
    }
    @PostMapping("/api/goals")
    public void dotaznik(@RequestBody Goals goals){
        goalService.saveGoal(goals);
    }
    @DeleteMapping("/api/goals")
    public void deleteGoal(@RequestBody Integer id){
        goalService.deleteGoal(id);
    }
    @GetMapping("/api/goal")
    public Goals getGoal(@RequestBody Integer id){
        return goalService.getGoal(id);
    }
}
