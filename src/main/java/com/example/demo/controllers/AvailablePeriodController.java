package com.example.demo.controllers;

import com.example.demo.entities.Address;
import com.example.demo.entities.AvailablePeriod;
import com.example.demo.services.AvailablePeriodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AvailablePeriodController {

    @Autowired
    private AvailablePeriodService availablePeriodService;

    /**
     * C - @PostMapping
     * R - @GetMapping
     * U - @PutMapping
     * D - @DeleteMapping
     */

    @GetMapping("/rest/availablePeriods")
    public List<AvailablePeriod> getAllAvailablePeriods(){
        return availablePeriodService.gettAllPeriods();
    }

    @GetMapping("/rest/availablePeriods/{id}")
    public AvailablePeriod getAvailablePeriod(@PathVariable int id){
        return availablePeriodService.getOnePeriod(id);
    }

    @PostMapping("/rest/availablePeriods/")
    public AvailablePeriod createNewPeriod(@RequestBody AvailablePeriod availablePeriod){
        return availablePeriodService.createAvailablePeriod(availablePeriod);
    }

}
