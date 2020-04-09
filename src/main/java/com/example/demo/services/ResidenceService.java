package com.example.demo.services;

import com.example.demo.entities.Residence;
import com.example.demo.repositories.ImageRepo;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    ResidenceRepo residenceRepo;

    @Autowired
    ImageRepo imageRepo;

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

}
