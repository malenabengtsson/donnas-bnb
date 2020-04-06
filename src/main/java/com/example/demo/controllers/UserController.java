package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * C - @PostMapping
     * R - @GetMapping
     * U - @PutMapping
     * D - @DeleteMapping
     */

    @GetMapping("/rest/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/rest/users/{id}")
    public User getAllUsers(@PathVariable int id){
        return userService.getOneUser(id);
    }

    @PostMapping("/auth/signup")
    public User registerUser(@RequestBody User user) {
       // System.out.println(user.getFull_name());
        return userService.registerUser(user);
    }

    @GetMapping("/auth/whoami")
    public User whoAmI() {
        return userService.findCurrentUser();
    }

}



/*
    const test = async () => {
    let res = await fetch('/rest/users')
    res = await res.json()
    console.log(res)
}
 */
