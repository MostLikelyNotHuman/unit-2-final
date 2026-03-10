package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.Interval;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IntervalRepository extends JpaRepository<Interval, Integer> {
}
