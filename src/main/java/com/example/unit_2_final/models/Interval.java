package com.example.unit_2_final.models;

public class Interval {
    private String name;
    private int size;
    private String imageURL;

    public Interval(String name, int size, String imageURL) {
        this.name = name;
        this.size = size;
        this.imageURL = imageURL;
    }

    public Interval() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
