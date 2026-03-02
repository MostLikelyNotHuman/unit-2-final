package com.example.unit_2_final.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
//    private List<Note> noteReview;
//    private List<Interval> intervalReview;

    public Account(int id, String username, String password, List<Note> noteReview, List<Interval> intervalReview) {
        this.id = id;
        this.username = username;
        this.password = password;
//        this.noteReview = noteReview;
//        this.intervalReview = intervalReview;
    }

    public Account() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public List<Note> getNoteReview() {
//        return noteReview;
//    }
//
//    public void setNoteReview(List<Note> noteReview) {
//        this.noteReview = noteReview;
//    }
//
//    public List<Interval> getIntervalReview() {
//        return intervalReview;
//    }
//
//    public void setIntervalReview(List<Interval> intervalReview) {
//        this.intervalReview = intervalReview;
//    }
}
