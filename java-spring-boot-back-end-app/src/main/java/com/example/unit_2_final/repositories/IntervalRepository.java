package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.Interval;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IntervalRepository extends JpaRepository<Interval, Integer> {
    Optional<Interval> findByName(String name);
}
