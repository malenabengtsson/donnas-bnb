package com.example.demo.controllers;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    /**
     * C - @PostMapping
     * R - @GetMapping
     * U - @PutMapping
     * D - @DeleteMapping
     */

    @GetMapping("/rest/bookings")
    public List<Booking> getAllBookings(){
        return bookingService.gettAllBookings();
    }

    @GetMapping("/rest/bookings/{id}")
    public Booking getOneBooking(@PathVariable int id){
        return bookingService.getOneBooking(id);
    }

    @PostMapping("/rest/bookings/")
    public Booking createNewBooking(@RequestBody Booking booking){
        return bookingService.createBooking(booking);
    }

}
