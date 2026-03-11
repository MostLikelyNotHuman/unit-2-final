package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.User;
import com.example.unit_2_final.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //Retrieve all users
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    //Retrieve single user by id
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable int id) {
        return userRepository.findById(id).orElse(null);
    }

    //Create new user
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}
    //    //Update user credentials
//    @PutMapping("/users/{id}")
//    public User updateUserUsername(@PathVariable int id, @RequestBody User user) {
//        user.setId(id);
//        return userRepository.save(user);
//    }
//
//    @PutMapping("/users/{id}/password")
//    public User updateUserPassword(@PathVariable int id, @RequestBody User user, String password) {
//        user.setPassword(password);
//        return userRepository.save(user);
//    }
//
//    @DeleteMapping("/users/{id}")
//    public void deleteUser(@PathVariable int id) {
//        userRepository.deleteById(id);
//    }
//
//    //Retrieve all notes in an user's note review list
//    @GetMapping("/users/{id}/notes")
//    public List<Note> getUserNotes(@PathVariable int id) {
//        return userRepository.findById(id).orElse(null).getNoteReview();
//        //TODO: deal with exception
//    }
//}
//
//    //Updates user's note review list
//    @PutMapping("/users/{id}/notes")
//    public List<Note> updateUserNotes(@PathVariable int id, @RequestBody User user, List<Note> noteReview) {
//        user.setNoteReview(noteReview);
//        return userRepository.save(user).getNoteReview();
//    }
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