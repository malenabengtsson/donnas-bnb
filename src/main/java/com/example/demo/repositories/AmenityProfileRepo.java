package com.example.demo.repositories;

import com.example.demo.entities.AmenityProfile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmenityProfileRepo extends CrudRepository<AmenityProfile, Integer> {

    public AmenityProfile findById(int id);
}
