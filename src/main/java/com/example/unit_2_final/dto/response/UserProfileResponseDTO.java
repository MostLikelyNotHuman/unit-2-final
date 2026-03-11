package com.example.unit_2_final.dto.response;

public class UserProfileResponseDTO {

    private String username;
    private String password;

    public UserProfileResponseDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public UserProfileResponseDTO() {
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
}
