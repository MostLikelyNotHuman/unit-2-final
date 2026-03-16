package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.Interval;
import com.example.unit_2_final.models.Note;
import com.example.unit_2_final.models.User;
import com.example.unit_2_final.repositories.IntervalRepository;
import com.example.unit_2_final.repositories.NoteRepository;
import com.example.unit_2_final.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    private final UserRepository userRepository;
    private final NoteRepository noteRepository;
    private final IntervalRepository intervalRepository;

    public UserController(UserRepository userRepository, NoteRepository noteRepository, IntervalRepository intervalRepository) {
        this.userRepository = userRepository;
        this.noteRepository = noteRepository;
        this.intervalRepository = intervalRepository;
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

    //Retrieve all intervals in a user's interval review list
    @GetMapping("/users/{userId}/intervals")
    public List<Interval> getUserIntervals(@PathVariable int userId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        return user.getIntervalReview();
    }

    //Updates user's note review list
    @PutMapping("/users/{userId}/notes")
    public List<Note> updateUserNotes(@PathVariable int userId, List<Note> noteReview) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.setNoteReview(noteReview);
        return userRepository.save(user).getNoteReview();
    }

    //Updates user's interval review list
    @PutMapping("/users/{userId}/intervals")
    public List<Interval> updateUserIntervals(@PathVariable int userId, List<Interval> intervalReview) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.setIntervalReview(intervalReview);
        return userRepository.save(user).getIntervalReview();
    }

    //Adds a note to user's note review list
    @PostMapping("/users/{userId}/notes/{noteId}")
    public Note addNoteToUserNotes(@PathVariable int userId, @PathVariable int noteId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException("Note not found with id: " + noteId));
        user.getNoteReview().add(note);
        userRepository.save(user);
        return note;
    }

    //Adds an interval to a user's interval review list
    @PostMapping("/users/{userId}/intervals/{intervalId}")
    public Interval addIntervalToUserIntervals(@PathVariable int userId, @PathVariable int intervalId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Interval interval = intervalRepository.findById(intervalId).orElseThrow(() -> new RuntimeException("Interval not found with id: " + intervalId));
        user.getIntervalReview().add(interval);
        userRepository.save(user);
        return interval;
    }

    //Deletes a note from user's note review list
    @DeleteMapping("/users/{userId}/notes/{noteId}")
    public void deleteNoteFromUserNotes(@PathVariable int userId, @PathVariable int noteId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException("Note not found with id: " + noteId));
        user.getNoteReview().remove(note);
        userRepository.save(user);
    }

    //Deletes an interval from a user's interval review list
    @DeleteMapping("/users/{userId}/intervals/{intervalId}")
    public void deleteIntervalFromUserIntervals(@PathVariable int userId, @PathVariable int intervalId) {
        
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        Interval interval = intervalRepository.findById(intervalId).orElseThrow(() -> new RuntimeException("Interval not found with id: " + intervalId));
        user.getIntervalReview().remove(interval);
        userRepository.save(user);
    }

    //Deletes all notes from a user's note review list
    @DeleteMapping("/users/{userId}/notes")
    public void deleteAllNotesFromUserNotes(@PathVariable int userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.getNoteReview().clear();
        userRepository.save(user);
    }

    //Deletes all intervals from a user's interval review list
    @DeleteMapping("/users/{userId}/intervals")
    public void deleteAllIntervalsFromUserIntervals(@PathVariable int userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.getIntervalReview().clear();
        userRepository.save(user);
    }
}