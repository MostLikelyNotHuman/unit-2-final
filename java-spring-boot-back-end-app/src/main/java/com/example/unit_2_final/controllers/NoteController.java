package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.Note;
import com.example.unit_2_final.repositories.NoteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class NoteController {

    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    //Retrieve all notes
    @GetMapping("/notes")
    public List<Note> getNotes() {
        return noteRepository.findAll();
    }

    //Retrieve single note by id
    @GetMapping("/notes/{id}")
    public Note getNote(@PathVariable int id) {
        return noteRepository.findById(id).orElse(null);
    }

    //Create new note
    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    //Delete note by id
    @DeleteMapping("/notes/{id}")
    public void deleteNote(@PathVariable int id) {
        noteRepository.deleteById(id);
    }
}
