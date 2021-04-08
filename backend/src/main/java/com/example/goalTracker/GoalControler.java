package com.example.goalTracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
