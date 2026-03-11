package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
