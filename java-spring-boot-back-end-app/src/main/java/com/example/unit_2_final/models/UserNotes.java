package com.example.unit_2_final.models;

import jakarta.persistence.*;

@Entity
public class UserNotes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String noteTitle;
    private String noteBody;

    @ManyToOne
    private User user;

    public UserNotes(String noteTitle, String noteBody, User user) {
        this.noteTitle = noteTitle;
        this.noteBody = noteBody;
        this.user = user;
    }

    private UserNotes() {
    }

    public String getNoteTitle() {
        return noteTitle;
    }

    public void setNoteTitle(String noteTitle) {
        this.noteTitle = noteTitle;
    }

    public String getNoteBody() {
        return noteBody;
    }

    public void setNoteBody(String noteBody) {
        this.noteBody = noteBody;
    }

    public User getUser() {
        return user;
    }

    public void setUserId(User user) {
        this.user = user;
    }
}
