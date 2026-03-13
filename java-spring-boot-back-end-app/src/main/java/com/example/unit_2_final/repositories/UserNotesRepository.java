package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.UserNotes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserNotesRepository extends JpaRepository<UserNotes, Integer> {
    Optional<UserNotes> deleteById(int noteId);
    Optional<UserNotes> createByUserId(int userId);
}
