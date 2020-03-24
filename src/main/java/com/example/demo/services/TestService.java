package com.example.demo.services;

import com.example.demo.entities.Test;
import com.example.demo.repositories.TestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {

    @Autowired
    TestRepo testRepo;

    public Test getOneText(int id){
        return testRepo.findById(id);
    }

    public List<Test> getAllTests(){
        return (List<Test>) testRepo.findAll();
    }
}
