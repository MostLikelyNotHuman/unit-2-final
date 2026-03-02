package com.example.unit_2_final.models;

import jakarta.persistence.*;

@Entity
public class Note {
    @Id
    private int pitch;
    private String name;
    private String text;
    private String imageURL;
    private String audio;

    public Note(String name, int pitch, String text, String imageURL, String audio) {
        this.name = name;
        this.pitch = pitch;
        this.text = text;
        this.imageURL = imageURL;
        this.audio = audio;
    }

    public Note() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPitch() {
        return pitch;
    }

    public void setPitch(int pitch) {
        this.pitch = pitch;
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
}
