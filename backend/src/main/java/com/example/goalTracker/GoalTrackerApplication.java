package com.example.goalTracker;

import ch.qos.logback.core.net.SyslogOutputStream;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GoalTrackerApplication {


	public static void main(String[] args) {
		new TimeUntilFinish();
	}
}
