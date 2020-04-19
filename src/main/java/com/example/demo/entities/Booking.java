package com.example.demo.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "bookings")
public class Booking  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String start_date;
    private String end_date;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn
    private Residence residence_id;
    private int total_price;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn
    private User user_id;

 public Booking(){}
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

    public Residence getResidence_id() {
        return residence_id;
    }

    public void setResidence_id(Residence residence_id) {
        this.residence_id = residence_id;
    }

    public User getUser_id() {
        return user_id;
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }

}
