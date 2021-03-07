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

    //treba doriesit (nefunguje equals)

    public String timeRemaining(Date date){
        Date till = new GregorianCalendar(2021, Calendar.MARCH, 7).getTime();

        if(date.before(till)){
            System.out.println("sdfgsdufy");
            return("pohode");

        }
        else if(date.equals(till)) {
            System.out.println("na case zacat robit");
            return ("hybaj");

        }

        else {
            System.out.println("uz to nejde vratit uz je neskoro");
            return ("a si dosol");
        }

    }

}
