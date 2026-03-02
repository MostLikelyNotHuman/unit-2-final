package com.example.unit_2_final.controllers;

import com.example.unit_2_final.models.Interval;
import com.example.unit_2_final.repositories.IntervalRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IntervalController {

    private final IntervalRepository intervalRepository;

    public IntervalController(IntervalRepository intervalRepository) {
        this.intervalRepository = intervalRepository;
    }

    //Retrieve all intervals
    @GetMapping("/intervals")
    public List<Interval> getIntervals() {
        return intervalRepository.findAll();
    }

    //Retrieve single interval by id 'size'
    @GetMapping("/intervals/{id}")
    public Interval getInterval(@PathVariable int id) {
        return intervalRepository.findById(id).orElse(null);
    }

    //Create new interval
    @PostMapping("/intervals")
    public Interval createInterval(@RequestBody Interval interval) {
        return intervalRepository.save(interval);
    }

    //Delete interval by id 'size'
    @DeleteMapping("/intervals/{id}")
    public void deleteInterval(@PathVariable int id) {
        intervalRepository.deleteById(id);
    }
}
