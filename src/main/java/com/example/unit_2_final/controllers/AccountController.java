package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.Account;
import com.example.unit_2_final.models.Interval;
import com.example.unit_2_final.models.Note;
import com.example.unit_2_final.repositories.AccountRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    private final AccountRepository accountRepository;

    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    //Retrieve all accounts
    @GetMapping("/accounts")
    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    //Retrieve single account by id
    @GetMapping("/accounts/{id}")
    public Account getAccount(@PathVariable int id) {
        return accountRepository.findById(id).orElse(null);
    }

    //Create new account
    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Account account) {
        return accountRepository.save(account);
    }

    @PutMapping("/accounts/{id}/username")
    public Account updateAccountUsername(@PathVariable int id, @RequestBody Account account, String username) {
        account.setUsername(username);
        return accountRepository.save(account);
    }

    @PutMapping("/accounts/{id}/password")
    public Account updateAccountPassword(@PathVariable int id, @RequestBody Account account, String password) {
        account.setPassword(password);
        return accountRepository.save(account);
    }

    @DeleteMapping("/accounts/{id}")
    public void deleteAccount(@PathVariable int id) {
        accountRepository.deleteById(id);
    }

    //Retrieve all notes in an account's note review list
    @GetMapping("/accounts/{id}/notes")
    public List<Note> getAccountNotes(@PathVariable int id) {
        return accountRepository.findById(id).orElse(null).getNoteReview();
        //TODO: deal with exception
    }

    //Updates account's note review list
    @PutMapping("/accounts/{id}/notes")
    public List<Note> updateAccountNotes(@PathVariable int id, @RequestBody Account account, List<Note> noteReview) {
        account.setNoteReview(noteReview);
        return accountRepository.save(account).getNoteReview();
    }

    //Retrieve all intervals in an account's interval review list
    @GetMapping("/accounts/{id}/intervals")
    public List getAccountIntervals(@PathVariable int id) {
        return accountRepository.findById(id).orElse(null).getIntervalReview();
        //TODO: deal with exception
    }

    //Updates account's interval review list
    @PutMapping("/accounts/{id}/intervals")
    public List<Interval> updateAccountIntervals(@PathVariable int id, @RequestBody Account account, List<Interval> intervalReview) {
        account.setIntervalReview(intervalReview);
        return accountRepository.save(account).getIntervalReview();
    }
}
