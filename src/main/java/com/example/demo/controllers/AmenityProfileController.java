package com.example.demo.controllers;

import com.example.demo.entities.AmenityProfile;
import com.example.demo.services.AmenityProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AmenityProfileController {

    @Autowired
    private AmenityProfileService amenityProfileService;

    /**
     * C - @PostMapping
     * R - @GetMapping
     * U - @PutMapping
     * D - @DeleteMapping
     */

    @GetMapping("/rest/amenityProfiles")
    public List<AmenityProfile> getAllAmenityProfiles(){
        return amenityProfileService.getAllAmenityProfiles();
    }

    @GetMapping("/rest/amenityProfiles/{id}")
    public AmenityProfile getOneAmenityProfile(@PathVariable int id){
        return amenityProfileService.getOneAmenityProfile(id);
    }

    @PostMapping("/rest/amenityProfiles/")
    public AmenityProfile createNewAmenityProfile(@RequestBody AmenityProfile amenityProfile) {
        return amenityProfileService.createAmenityProfile(amenityProfile);
    }
}
