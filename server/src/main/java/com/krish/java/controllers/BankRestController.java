package com.krish.java.controllers;

import com.krish.java.models.Users;
import com.krish.java.services.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
