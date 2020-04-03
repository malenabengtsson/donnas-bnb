package com.example.demo.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "residences")
public class Residence implements Serializable{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int max_guests;


   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn()
    private AmenityProfile amenity_profile_id;

    private int address_id;

    private int beds;

    private int user_id;

    private String description;

    private String title;

    private int price_per_night;

    public Residence(){}

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public AmenityProfile getAmenity_profile_id() {
        return amenity_profile_id;
    }

    public void setAmenity_profile_id(AmenityProfile amenity_profile_id) {
        this.amenity_profile_id = amenity_profile_id;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPrice_per_night() {
        return price_per_night;
    }
    public void setPrice_per_night(int price_per_night) {
        this.price_per_night = price_per_night;
    }


}
