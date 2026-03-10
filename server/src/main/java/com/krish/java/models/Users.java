package com.krish.java.models;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity

public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int user_id;

    @Column(unique = true)
    private String username;

    private String password;
    private String role;

    @Column(unique = true)
    private String email;

    @CreationTimestamp
    private Date timestamp;
    @OneToMany(mappedBy = "user", cascade = jakarta.persistence.CascadeType.ALL)
    @JsonIgnore
    private List<Accounts> accounts;

}