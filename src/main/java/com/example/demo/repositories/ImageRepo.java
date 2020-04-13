package com.example.demo.repositories;

import com.example.demo.entities.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepo extends CrudRepository<Image, Integer> {

    public Image findById(int id);
    public List<Image> findAllByResidenceId(int id);
}
