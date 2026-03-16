package com.example.unit_2_final.models;

import jakarta.persistence.*;

@Entity
public class UserNote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String noteBody;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    private UserNote() {
    }

    public UserNote(String noteBody, User user) {
        this.noteBody = noteBody;
        this.user = user;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public void setUser(User user) {
        this.user = user;
    }
}
