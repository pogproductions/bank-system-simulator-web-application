package com.krish.java.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    private String accountNumber;
    private String accountType;
    private double balance;

    @ManyToOne
    @JoinColumn(name = "user_id") // foreign key column
    private Users user;
}
