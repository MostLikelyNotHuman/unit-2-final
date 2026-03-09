package com.example.unit_2_final.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "`interval`")
public class Interval {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int size;
    private String name;
    private String imageURL;

    @ManyToMany(mappedBy = "intervalReview")
    private List<Account> accountList;

    public Interval(int size, String name, String imageURL, List<Account> accountList) {
        this.size = size;
        this.name = name;
        this.imageURL = imageURL;
        this.accountList = accountList;
    }

    public Interval() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public List<Account> getAccountList() {
        return accountList;
    }

    public void setAccountList(List<Account> accountList) {
        this.accountList = accountList;
    }
}
