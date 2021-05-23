package com.example.goalTracker.Goals;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.GregorianCalendar;

@Entity
public class Goals {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String name;
    private GregorianCalendar date;
    private int priority;
    private String description;
    @JsonIgnore
    private boolean finished;


    public Goals(int id, String name, GregorianCalendar date, int priority, String description, boolean finished) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.description = description;
        this.finished = finished;
    }

    public Goals (){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public GregorianCalendar getDate() {
        return date;
    }

    public boolean isFinished() {
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

    public void setDate(GregorianCalendar date) {
        this.date = date;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getDescription(){return description;}

    public void setDescription(String description){this.description = description;}

}
