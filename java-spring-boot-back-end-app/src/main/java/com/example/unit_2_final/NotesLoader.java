package com.example.unit_2_final;

import com.example.unit_2_final.models.Note;
import com.example.unit_2_final.repositories.NoteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class NotesLoader {

    @Bean
    public CommandLineRunner loadNotes(NoteRepository noteRepository) {
        return args -> {
            noteRepository.deleteAll();
            if (noteRepository.findAll().isEmpty()) {

                Note c4 = new Note(0, "C4", "C", "/assets/images/notes/c4.webp", "audio", null);
                Note d4 = new Note(2, "D4", "D", "/assets/images/notes/d4.webp", "audio", null);
                Note e4 = new Note(4, "E4", "E", "/assets/images/notes/e4.webp", "audio", null);
                Note f4 = new Note(5, "F4", "F", "/assets/images/notes/f4.webp", "audio", null);
                Note g4 = new Note(7, "G4", "G", "/assets/images/notes/g4.webp", "audio", null);
                Note a4 = new Note(9, "A4", "A", "/assets/images/notes/a4.webp", "audio", null);
                Note b4 = new Note(11, "B4", "B", "/assets/images/notes/b4.webp", "audio", null);
                Note c5 = new Note(12, "C5", "C", "/assets/images/notes/c5.webp", "audio", null);

                noteRepository.save(c4);
                noteRepository.save(d4);
                noteRepository.save(e4);
                noteRepository.save(f4);
                noteRepository.save(g4);
                noteRepository.save(a4);
                noteRepository.save(b4);
                noteRepository.save(c5);
            }
        };
    }

}
