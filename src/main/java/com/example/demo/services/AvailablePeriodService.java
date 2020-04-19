package com.example.demo.services;

import com.example.demo.entities.Address;
import com.example.demo.entities.AvailablePeriod;
import com.example.demo.repositories.AvailablePeriodRepo;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailablePeriodService {

    @Autowired
    AvailablePeriodRepo availablePeriodRepo;

    public AvailablePeriod getOnePeriod(int id) {
        return availablePeriodRepo.findById(id);
    }

    public List<AvailablePeriod> gettAllPeriods() {
        return (List<AvailablePeriod>) availablePeriodRepo.findAll();
    }

    public AvailablePeriod createAvailablePeriod(AvailablePeriod availablePeriod) {
        availablePeriod.setResidence_id(availablePeriod.getResidence_id());
        return availablePeriodRepo.save(availablePeriod);
    }
}



