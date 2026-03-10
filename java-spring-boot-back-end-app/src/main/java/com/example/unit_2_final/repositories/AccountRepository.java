package com.example.unit_2_final.repositories;

import com.example.unit_2_final.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
}
