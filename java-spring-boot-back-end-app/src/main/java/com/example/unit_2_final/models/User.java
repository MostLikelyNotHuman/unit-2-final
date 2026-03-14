package com.example.unit_2_final.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "`users`")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_note_review",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "note_id")
    )
    private List<Note> noteReview;

    @ManyToMany
    @JoinTable(
            name = "user_interval_review",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "interval_id")
    )
    private List<Interval> intervalReview;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<UserNote> userNotes;

    public User(String username, String password, List<Note> noteReview, List<Interval> intervalReview, List<UserNote> userNotes) {
        this.username = username;
        this.password = password;
        this.noteReview = noteReview;
        this.intervalReview = intervalReview;
        this.userNotes = userNotes;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User() {
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

    public List<Note> getNoteReview() {
        return noteReview;
    }

    public void setNoteReview(List<Note> noteReview) {
        this.noteReview = noteReview;
    }

    public List<Interval> getIntervalReview() {
        return intervalReview;
    }

    public void setIntervalReview(List<Interval> intervalReview) {
        this.intervalReview = intervalReview;
    }

    public List<UserNote> getUserNotes() {
        return userNotes;
    }

    public void setUserNotes(List<UserNote> userNotes) {
        this.userNotes = userNotes;
    }
}
