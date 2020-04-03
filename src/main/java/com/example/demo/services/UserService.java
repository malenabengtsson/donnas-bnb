package com.example.demo.services;

import com.example.demo.configs.MyUserDetailsService;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public User getOneUser(int id){
        return userRepo.findById(id);
    }

    public List<User> getAllUsers(){
        return (List<User>) userRepo.findAll();
    }
/*
    public User customLogin(User user){
        User dbUser = userRepo.findByEmail(user.getEmail());
        if (dbUser == null) {
            return null;
        }

        if (encoder.matches(user.getPassword(), dbUser.getPassword())){
            return dbUser;
        }
        return null;
    }

    public User customRegister(User user){
        User newUser = new User(user.getEmail(), encoder.encode(user.getPassword()));
        return userRepo.save(newUser);
    }
 */


    public User findCurrentUser() {
        String username =
                SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByEmail(username);
    }

    public User registerUser(User user){
        // String full_name, String email, String password, int phone_number
        return myUserDetailsService.addUser(user.getFull_name(), user.getEmail(), user.getPassword(), user.getPhone_number());
    }


}
