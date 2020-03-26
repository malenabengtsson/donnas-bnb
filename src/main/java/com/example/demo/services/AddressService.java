package com.example.demo.services;

import com.example.demo.entities.Address;
import com.example.demo.repositories.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    AddressRepo addressRepo;

    public Address getOneAddress(int id){
        return addressRepo.findById(id);
    }

    public List<Address> getAllAddresses(){
        return (List<Address>) addressRepo.findAll();
    }
}
