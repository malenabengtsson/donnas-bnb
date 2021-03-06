package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepo;
import com.example.demo.repositories.ImageRepo;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    BookingRepo bookingRepo;

    @Autowired
    ImageRepo imageRepo;

    @Autowired
    ResidenceRepo residenceRepo;

    public Booking getOneBooking(int id){
        return bookingRepo.findById(id);
    }

    public List<Booking> gettAllBookings(){
        List<Booking> bookings = (List<Booking>) bookingRepo.findAll();
        bookings.forEach(booking -> {
            booking.getResidence_id().setImages(imageRepo.findAllByResidenceId(booking.getResidence_id().getId()));
        });
        return (List<Booking>) bookingRepo.findAll();
    }
    public Booking createBooking(Booking booking){
        booking.setResidence_id(residenceRepo.save(booking.getResidence_id()));
        return bookingRepo.save(booking);
    }
}
