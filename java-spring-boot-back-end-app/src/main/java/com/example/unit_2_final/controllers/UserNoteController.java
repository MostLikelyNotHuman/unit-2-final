package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.User;
import com.example.unit_2_final.models.UserNote;
import com.example.unit_2_final.repositories.UserNotesRepository;
import com.example.unit_2_final.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserNoteController {

    private final UserRepository userRepository;
    private final UserNotesRepository userNotesRepository;

    public UserNoteController(UserRepository userRepository, UserNotesRepository userNotesRepository) {
        this.userRepository = userRepository;
        this.userNotesRepository = userNotesRepository;
    }

    //Retrieve all user notes
    @GetMapping("/users/{userId}/notes")
    public List<UserNote> getUserNotes(@PathVariable int userId) {
        return userNotesRepository.findByUserId(userId);
    }

    //Retrieve single user note by id
    @GetMapping("/users/{userId}/notes/{id}")
    public UserNote getUserNote(@PathVariable int userId, @PathVariable int id) {
        return userNotesRepository.findById(id).orElse(null);
    }

    //Create new user note
    @PostMapping("/users/{userId}/notes")
    public UserNote createUserNote(@PathVariable int userId, @RequestBody UserNote userNote) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        userNote.setUser(user);

        return userNotesRepository.save(userNote);
    }

    //Delete user note by id
    @DeleteMapping("/users/notes/{id}")
    public void deleteUserNote(@PathVariable int id) {
        userNotesRepository.deleteById(id);
    }
}
