package com.krish.java.controllers;

import com.krish.java.models.Users;
import com.krish.java.services.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BankRestController {

    @Autowired
    BankService bankService;

    @GetMapping("/users")
    public List<Users> users() {
        return bankService.getUsers();
    }

    @PostMapping("/user")
    public void createUser(@RequestBody Users user) {
        bankService.saveUser(user);
    }

}
