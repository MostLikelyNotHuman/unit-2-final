package com.example.unit_2_final.models;

import jakarta.persistence.*;

@Entity
public class UserNote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String noteBody;

    @ManyToOne
    private User user;

    public UserNote(String noteBody, User user) {
        this.noteBody = noteBody;
        this.user = user;
    }

    private UserNote() {
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
