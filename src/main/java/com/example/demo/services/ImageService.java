package com.example.demo.services;

import com.example.demo.entities.Address;
import com.example.demo.entities.Image;
import com.example.demo.repositories.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {

    @Autowired
    ImageRepo imageRepo;

    public Image getOneImage(int id) {
        return imageRepo.findById(id);
    }

    public List<Image> getAllImages() {
        return (List<Image>) imageRepo.findAll();
    }

    public Image createImage(Image image) {
        return imageRepo.save(image);
    }
}

