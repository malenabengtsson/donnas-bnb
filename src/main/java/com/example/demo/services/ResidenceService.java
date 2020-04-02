package com.example.demo.services;

import com.example.demo.entities.Residence;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    ResidenceRepo residenceRepo;

    public Residence findOneResidence(int id){
        return residenceRepo.findById(id);
    }

    public List<Residence> getAllResidences(){
        return (List<Residence>) residenceRepo.findAll();
    }

}
