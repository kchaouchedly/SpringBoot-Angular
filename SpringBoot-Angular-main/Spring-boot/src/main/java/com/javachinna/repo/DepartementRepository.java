package com.javachinna.repo;

import com.javachinna.model.Departement;
import org.springframework.data.jpa.repository.JpaRepository;



public interface DepartementRepository extends JpaRepository<Departement, Long> {
}
