package com.example.goalTracker;

import org.springframework.web.bind.annotation.*;

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
    @DeleteMapping("goals")
    public void deleteGoal(@RequestBody Integer id){
        goalService.deleteGoal(id);
    }
    @GetMapping("goals")
    public Goals getGoal(@RequestBody Integer id){
        return goalService.getGoal(id);
    }

    /*@GetMapping("goals")
    public void timer(@RequestBody Goals goals, GregorianCalendar dateNow ){
        if(dateNow.after(goals.getDate()))
            goals.setPriority(5);
    }*/
}
