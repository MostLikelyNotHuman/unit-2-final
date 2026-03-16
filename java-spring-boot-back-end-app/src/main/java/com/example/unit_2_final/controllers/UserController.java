package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.Note;
import com.example.unit_2_final.models.User;
import com.example.unit_2_final.repositories.NoteRepository;
import com.example.unit_2_final.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    private final UserRepository userRepository;
    private final NoteRepository noteRepository;

    public UserController(UserRepository userRepository, NoteRepository noteRepository) {
        this.userRepository = userRepository;
        this.noteRepository = noteRepository;
    }

    //Retrieve single user by id
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable int id) {
        return userRepository.findById(id).orElse(null);
    }

    //Retrieve all notes in a user's note review list
    @GetMapping("/users/{userId}/notes")
    public List<Note> getUserNotes(@PathVariable int userId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        return user.getNoteReview();
        //TODO: deal with exception
    }

    //Updates user's note review list
    @PutMapping("/users/{userId}/notes")
    public List<Note> updateUserNotes(@PathVariable int userId, List<Note> noteReview) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.setNoteReview(noteReview);
        return userRepository.save(user).getNoteReview();
    }

    //Adds a note to user's note review list
    @PostMapping("/users/{userId}/{noteId}/notes")
    public Note addNoteToUserNotes(@PathVariable int userId, @PathVariable int noteId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException("Note not found with id: " + noteId));
        user.getNoteReview().add(note);
        userRepository.save(user);
        return note;
    }

    //Deletes a note from user's note review list
    @DeleteMapping("/users/{userId}/{noteId}/notes")
    public void deleteNoteFromUserNotes(@PathVariable int userId, @PathVariable int noteId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException("Note not found with id: " + noteId));
        user.getNoteReview().remove(note);
    }

    //Deletes all notes from a user's note review list
    @DeleteMapping("/users/{userId}/notes")
    public void deleteAllNotesFromUserNotes(@PathVariable int userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.getNoteReview().clear();
        userRepository.save(user);
    }
}