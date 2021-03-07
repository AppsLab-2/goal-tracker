package com.example.goalTracker;

import java.util.Date;
import java.util.*;
import java.text.*;


public class TimeUntilFinish {
    Date date = new Date();
    SimpleDateFormat dayFormat =
            new SimpleDateFormat ("yyyy.MM.dd");

    public TimeUntilFinish(){
        timeRemaining(date);
    }
    public boolean timeRemaining(Date date){
        Date till = new GregorianCalendar(2020, Calendar.MARCH, 11).getTime();
        System.out.println((date.before(till)));
        return(date.before(till));
    }

}
