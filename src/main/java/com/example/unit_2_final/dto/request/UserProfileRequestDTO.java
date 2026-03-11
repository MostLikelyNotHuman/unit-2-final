package com.example.unit_2_final.dto.request;

import jakarta.validation.constraints.*;

public class UserProfileRequestDTO {

    @NotBlank(message = "Username is required")
    private String username;

    @NotNull(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    public UserProfileRequestDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public UserProfileRequestDTO() {
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
