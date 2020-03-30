package com.example.demo.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "amentityProfiles")
public class AmenityProfile implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private boolean wifi;
    private boolean tv;
    private boolean shower;
    private boolean bathtub;
    private boolean balcony;
    private boolean washing_machine;
    private boolean kitchen;
    private boolean pool;
    private boolean free_parking;
    private boolean air_conditioner;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isWifi() {
        return wifi;
    }

    public void setWifi(boolean wifi) {
        this.wifi = wifi;
    }

    public boolean isTv() {
        return tv;
    }

    public void setTv(boolean tv) {
        this.tv = tv;
    }

    public boolean isShower() {
        return shower;
    }

    public void setShower(boolean shower) {
        this.shower = shower;
    }

    public boolean isBathtub() {
        return bathtub;
    }

    public void setBathtub(boolean bathtub) {
        this.bathtub = bathtub;
    }

    public boolean isBalcony() {
        return balcony;
    }

    public void setBalcony(boolean balcony) {
        this.balcony = balcony;
    }

    public boolean isWashing_machine() {
        return washing_machine;
    }

    public void setWashing_machine(boolean washing_machine) {
        this.washing_machine = washing_machine;
    }

    public boolean isKitchen() {
        return kitchen;
    }

    public void setKitchen(boolean kitchen) {
        this.kitchen = kitchen;
    }

    public boolean isPool() {
        return pool;
    }

    public void setPool(boolean pool) {
        this.pool = pool;
    }

    public boolean isFree_parking() {
        return free_parking;
    }

    public void setFree_parking(boolean free_parking) {
        this.free_parking = free_parking;
    }

    public boolean isAir_conditioner() {
        return air_conditioner;
    }

    public void setAir_conditioner(boolean air_conditioner) {
        this.air_conditioner = air_conditioner;
    }
}
