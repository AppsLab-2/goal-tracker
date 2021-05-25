package com.example.goalTracker.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserControler {
    @GetMapping("/user")
    public void getUser() {

    }
}
