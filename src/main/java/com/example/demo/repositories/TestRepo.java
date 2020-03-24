package com.example.demo.repositories;

import com.example.demo.entities.Test;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepo extends CrudRepository<Test, Integer> {

    public Test findById(int id);
}
