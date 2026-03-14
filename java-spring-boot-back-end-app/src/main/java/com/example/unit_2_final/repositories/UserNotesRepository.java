package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.UserNote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserNotesRepository extends JpaRepository<UserNote, Integer> {
//    Optional<UserNotes> deleteById(int noteId);
//    Optional<UserNotes> createByUserId(int userId);
}
