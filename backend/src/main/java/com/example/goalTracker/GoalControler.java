package com.example.goalTracker;

import com.example.goalTracker.Goals;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoalControler {
    GoalService goalService;
    public GoalControler(GoalService goalService){
        this.goalService = goalService;
    }
    @GetMapping("/")
    public String mainPage(){
        Goals goals = new Goals();
        goals.setName("ricardo");
        goals.setPriority(4325352);
        goalService.saveGoal(goals);
        return ("Hello mainpage");
    }
}
