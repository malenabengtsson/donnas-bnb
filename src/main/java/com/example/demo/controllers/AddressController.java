package com.example.demo.controllers;

import com.example.demo.entities.Address;
import com.example.demo.entities.Residence;
import com.example.demo.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    /**
     * C - @PostMapping
     * R - @GetMapping
     * U - @PutMapping
     * D - @DeleteMapping
     */

    @GetMapping("/rest/addresses")
    public List<Address> getAllAddresses(){
        return addressService.getAllAddresses();
    }

    @GetMapping("/rest/addresses/{id}")
    public Address getAddress(@PathVariable int id){
        return addressService.getOneAddress(id);
    }

    @GetMapping("/rest/addresses/search/{city}")
    public List<Address> getByCity(@PathVariable String city){
        return addressService.getByCity(city);
    }

 
}
