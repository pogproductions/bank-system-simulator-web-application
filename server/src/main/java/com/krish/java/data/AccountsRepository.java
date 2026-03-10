package com.krish.java.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krish.java.models.Accounts;

public interface AccountsRepository extends JpaRepository<Accounts, Integer> {
    Accounts findByAccountNumber(String accountNumber);
}
