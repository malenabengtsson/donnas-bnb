package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "availablePeriods")
public class AvailablePeriod  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String start_date;
    private String end_date;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Residence residence_id;

    public AvailablePeriod(){}
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
}
