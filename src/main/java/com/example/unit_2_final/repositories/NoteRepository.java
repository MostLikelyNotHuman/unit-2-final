package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Integer> {
}
