package com.example.unit_2_final.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "`notes`")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int pitch;
    private String name;
    private String text;
    private String imageURL;
    private String audio;

    @ManyToMany(mappedBy = "noteReview")
    private List<User> userList;

    public Note(int pitch, String name, String text, String imageURL, String audio, List<User> userList) {
        this.pitch = pitch;
        this.name = name;
        this.text = text;
        this.imageURL = imageURL;
        this.audio = audio;
        this.userList = userList;
    }

    public Note() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPitch() {
        return pitch;
    }

    public void setPitch(int pitch) {
        this.pitch = pitch;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }
}
