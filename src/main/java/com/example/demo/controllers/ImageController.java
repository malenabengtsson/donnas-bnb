package com.example.demo.controllers;

import com.example.demo.entities.Image;
import com.example.demo.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ImageController {

    @Autowired
    private ImageService imageService;

    /**
     * C - @PostMapping
     * R - @GetMapping
     * U - @PutMapping
     * D - @DeleteMapping
     */

    @GetMapping("/rest/images")
    public List<Image> getAllImages(){
        return imageService.getAllImages();
    }

    @GetMapping("/rest/images/{id}")
    public Image getOneImage(@PathVariable int id){
        return imageService.getOneImage(id);
    }

    @PostMapping("/rest/images/")
    public Image createNewImage(@RequestBody Image image){
        return imageService.createImage(image);
    }

}
