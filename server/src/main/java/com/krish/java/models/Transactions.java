package com.krish.java.models;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    private double amount;

    @ManyToOne
    @JoinColumn(name = "from_account_id")
    @JsonIgnore
    private Accounts fromAccount;

    @ManyToOne
    @JoinColumn(name = "to_account_id")
    @JsonIgnore
    private Accounts toAccount;

    @CreationTimestamp
    private Date timestamp;
}
