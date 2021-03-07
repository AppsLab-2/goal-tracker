package com.example.goalTracker;
import java.util.Date;

import javax.persistence.Entity;

@Entity
public class Tracks {
    private String name;
    private Date date;
    private int priority;
}
