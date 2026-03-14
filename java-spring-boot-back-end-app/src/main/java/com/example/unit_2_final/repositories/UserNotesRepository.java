package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.UserNote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserNotesRepository extends JpaRepository<UserNote, Integer> {
    List<UserNote> findByUserId(int userId);
}
