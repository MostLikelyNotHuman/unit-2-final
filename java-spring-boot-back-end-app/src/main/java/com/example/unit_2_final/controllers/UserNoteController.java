package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.UserNote;
import com.example.unit_2_final.repositories.UserNotesRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserNoteController {

    private final UserNotesRepository userNotesRepository;

    public UserNoteController(UserNotesRepository userNotesRepository) {
        this.userNotesRepository = userNotesRepository;
    }

    //Retrieve all user notes
    @GetMapping("/user-notes")
    public List<UserNote> getUserNotes() {
        return userNotesRepository.findAll();
    }

    //Retrieve single user note by id
    @GetMapping("/user-notes/{id}")
    public UserNote getUserNote(@PathVariable int id) {
        return userNotesRepository.findById(id).orElse(null);
    }

    //Create new user note
    @PostMapping("/user-notes")
    public UserNote createUserNote(@RequestBody UserNote userNote) {
        return userNotesRepository.save(userNote);
    }

    //Delete user note by id
    @DeleteMapping("/user-notes/{id}")
    public void deleteUserNote(@PathVariable int id) {
        userNotesRepository.deleteById(id);
    }
}
