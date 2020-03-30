package com.example.demo.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "residences")
public class Residence {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int max_guests;

    private int amenity_profile_id;

    private int address_id;

    private int beds;

    private int user_id;

    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMax_guests() {
        return max_guests;
    }

    public void setMax_guests(int max_guests) {
        this.max_guests = max_guests;
    }

    public int getAmenity_profile_id() {
        return amenity_profile_id;
    }

    public void setAmenity_profile_id(int amenity_profile_id) {
        this.amenity_profile_id = amenity_profile_id;
    }

    public int getAddress_id() {
        return address_id;
    }

    public void setAddress_id(int address_id) {
        this.address_id = address_id;
    }

    public int getBeds() {
        return beds;
    }

    public void setBeds(int beds) {
        this.beds = beds;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
