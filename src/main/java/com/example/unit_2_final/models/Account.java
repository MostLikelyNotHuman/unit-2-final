package com.example.unit_2_final.models;

import java.util.List;

public class Account {
    private int id;
    private String username;
    private String password;
    private List<Object> noteReview;
    private List<Object> intervalReview;

    public Account(int id, String username, String password, List<Object> noteReview, List<Object> intervalReview) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.noteReview = noteReview;
        this.intervalReview = intervalReview;
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

    public List<Object> getNoteReview() {
        return noteReview;
    }

    public void setNoteReview(List<Object> noteReview) {
        this.noteReview = noteReview;
    }

    public List<Object> getIntervalReview() {
        return intervalReview;
    }

    public void setIntervalReview(List<Object> intervalReview) {
        this.intervalReview = intervalReview;
    }
}
