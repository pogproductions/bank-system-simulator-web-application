package com.krish.java.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.krish.java.models.Transactions;

public interface TransactionsRepository extends JpaRepository<Transactions, Integer>{

}
