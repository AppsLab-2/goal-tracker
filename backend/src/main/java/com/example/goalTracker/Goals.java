package com.example.goalTracker;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Goals {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String name;
    private String date;
    private int priority;
    private String description;

    public Goals(int id, String name, String date, int priority, String description) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.description = description;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
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
