package com.example.goalTracker.Goals;

import org.springframework.web.bind.annotation.*;
import java.time.format.DateTimeFormatter;
import java.util.GregorianCalendar;

@RestController
@RequestMapping("/api/")
public class GoalControler {
    GoalService goalService;

    public GoalControler(GoalService goalService){
        this.goalService = goalService;
    }
    @GetMapping("goals")
    public Iterable<Goals> mainPage(){
        return (goalService.returnGoal());
    }
    @PostMapping("goals")
    public void dotaznik(@RequestBody Goals goals){
        goalService.saveGoal(goals);
    }
    @DeleteMapping("goals/{id}")
    public void deleteGoal(@RequestBody Integer id){
        goalService.deleteGoal(id);
    }
    @GetMapping("goals/{id}")
    public Goals getGoal(@PathVariable Integer id){
        return goalService.getGoal(id);
    }
}

