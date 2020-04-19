package com.example.demo.services;

import com.example.demo.entities.Address;
import com.example.demo.entities.Residence;
import com.example.demo.entities.User;
import com.example.demo.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    ResidenceRepo residenceRepo;

    @Autowired
    ImageRepo imageRepo;

    @Autowired
    AddressRepo addressRepo;

    @Autowired
    AmenityProfileRepo amenityProfileRepo;

    @Autowired
    UserRepo userRepo;

    public Residence findOneResidence(int id){
        Residence residence = residenceRepo.findById(id);
        residence.setImages(imageRepo.findAllByResidenceId(id));
        return residence;
    }

    public List<Residence> getAllResidences(){
        List<Residence> residences = (List<Residence>) residenceRepo.findAll();
        residences.forEach(residence -> residence.setImages(imageRepo.findAllByResidenceId(residence.getId())));
        return  residences;
    }

    public Residence createResidence(Residence residence){
        residence.setAddress_id(addressRepo.save(residence.getAddress_id()));
        residence.setAmenity_profile_id(amenityProfileRepo.save(residence.getAmenity_profile_id()));
        return residenceRepo.save(residence);
    }

}
