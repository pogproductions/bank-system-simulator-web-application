package com.krish.java.services;

import com.krish.java.data.AccountsRepository;
import com.krish.java.data.TransactionsRepository;
import com.krish.java.data.UserRepository;
import com.krish.java.models.Accounts;
import com.krish.java.models.Transactions;
import com.krish.java.models.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankService {

    @Autowired
    AccountsRepository accountsRepository;

    @Autowired
    TransactionsRepository transactionsRepository;

    @Autowired
    UserRepository userRepository;

    public String deposit(String accountNumber, double amount) {
        Accounts account = accountsRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return "Account not found";
        }

        if (amount <= 0) {
            return "Cannot deposit negative values, or zeros";
        }

        account.setBalance(account.getBalance() + amount);
        accountsRepository.save(account);

        return "Deposit successful, new balance is "+ account.getBalance();
    }

    public String withdrawl(String accountNumber, double amount) {
        Accounts account = accountsRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return "Account not found";
        }

        if (account.getBalance() < amount) {
            return "Cannot withdrawl higher than your balance";
        }

        account.setBalance(account.getBalance() - amount);
        accountsRepository.save(account);

        return "Withdrawl successful, new balance is "+ account.getBalance();
    }

    public void saveUser(Users user) {
        userRepository.save(user);
    }

    public void saveTransaction(Transactions transaction) {
        transactionsRepository.save(transaction);
    }

    public void saveAccount(Accounts account) {
        accountsRepository.save(account);
    }

    public List<Users> getUsers() {
        return userRepository.findAll();
    }
}
