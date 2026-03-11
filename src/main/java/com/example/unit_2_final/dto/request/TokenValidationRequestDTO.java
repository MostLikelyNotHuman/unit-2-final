package com.example.unit_2_final.dto.request;

public class TokenValidationRequestDTO {

    private String token;
    private String username;

    public TokenValidationRequestDTO(String token, String username) {
        this.token = token;
        this.username = username;
    }

    public TokenValidationRequestDTO() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
