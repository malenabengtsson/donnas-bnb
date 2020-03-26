package com.example.demo.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "bookings")
@IdClass(Booking.class)
public class Booking implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String start_date;
    private String end_date;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int residence_id;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public int getResidence_id() {
        return residence_id;
    }

    public void setResidence_id(int residence_id) {
        this.residence_id = residence_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
