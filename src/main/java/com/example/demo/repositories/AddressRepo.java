package com.example.demo.repositories;

import com.example.demo.entities.Address;
import com.example.demo.entities.Residence;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepo extends CrudRepository<Address, Integer> {

    public Address findById(int id);
    public List<Address> findAllByCityContainingIgnoreCase(String city);
}
