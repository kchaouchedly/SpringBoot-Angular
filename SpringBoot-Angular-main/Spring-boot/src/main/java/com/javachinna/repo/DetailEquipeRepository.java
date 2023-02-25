
package com.javachinna.repo;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.javachinna.model.DetailEquipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import javax.transaction.Transactional;

@Transactional

public interface DetailEquipeRepository extends JpaRepository<DetailEquipe, Integer> {
}
