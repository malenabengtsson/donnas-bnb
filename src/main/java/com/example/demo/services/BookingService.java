package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    BookingRepo bookingRepo;

    public Booking getOneBooking(int id){
        return bookingRepo.findById(id);
    }

    public List<Booking> gettAllBookings(){
        return (List<Booking>) bookingRepo.findAll();
    }
}
