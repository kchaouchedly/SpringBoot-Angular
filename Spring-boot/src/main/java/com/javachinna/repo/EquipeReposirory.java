package com.javachinna.repo;

import com.javachinna.model.Equipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import javax.transaction.Transactional;
import java.util.List;
@Transactional

public interface EquipeReposirory extends JpaRepository<Equipe,Integer> {
    List<Equipe> findByNomEquipe(String nomEquipe);
}
