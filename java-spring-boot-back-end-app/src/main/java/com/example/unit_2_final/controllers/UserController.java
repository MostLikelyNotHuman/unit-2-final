package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.Note;
import com.example.unit_2_final.models.User;
import com.example.unit_2_final.repositories.NoteRepository;
import com.example.unit_2_final.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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
    public List<Note> getUserNotes(@PathVariable int id) {
        return userRepository.findById(id).orElse(null).getNoteReview();
        //TODO: deal with exception
    }

    //Updates user's note review list
    @PutMapping("/users/{userId}/notes")
    public List<Note> updateUserNotes(@PathVariable int userIid, @RequestBody User user, List<Note> noteReview) {
        user.setNoteReview(noteReview);
        return userRepository.save(user).getNoteReview();
    }

    //Adds a note to user's note review list
    @PostMapping("/users/{userId}/{noteId}/notes")
    public Note addNoteToUserNotes(@PathVariable int userId, @PathVariable int noteId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException("Note not found with id: " + noteId));
        user.getNoteReview().add(note);
        return note;
    }

    @DeleteMapping("/users/{userId}/{noteId}/notes")
    public void deleteNoteFromUserNotes(@PathVariable int userId, @PathVariable int noteId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException("Note not found with id: " + noteId));
        user.getNoteReview().remove(note);
    }
}

//
//    //Retrieve all intervals in an user's interval review list
//    @GetMapping("/users/{id}/intervals")
//    public List<Interval> getUserIntervals(@PathVariable int id) {
//        return userRepository.findById(id).orElse(null).getIntervalReview();
//        //TODO: deal with exception
//    }
//
//    //Updates user's interval review list
//    @PutMapping("/users/{id}/intervals")
//    public List<Interval> updateUserIntervals(@PathVariable int id, @RequestBody User user, List<Interval> intervalReview) {
//        user.setIntervalReview(intervalReview);
//        return userRepository.save(user).getIntervalReview();
//    }
//}