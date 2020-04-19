package com.example.demo.services;

import com.example.demo.entities.AmenityProfile;
import com.example.demo.repositories.AmenityProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmenityProfileService {

    @Autowired
    AmenityProfileRepo amenityProfileRepo;

    public AmenityProfile getOneAmenityProfile(int id){
        return amenityProfileRepo.findById(id);
    }

    public List<AmenityProfile> getAllAmenityProfiles(){
        return (List<AmenityProfile>) amenityProfileRepo.findAll();
    }

    public AmenityProfile createAmenityProfile(AmenityProfile amenityProfile) {
        return amenityProfileRepo.save(amenityProfile);
    }
}
