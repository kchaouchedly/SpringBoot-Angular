package com.javachinna.repo;


import com.javachinna.model.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface ContratRepository extends JpaRepository<Contrat, Long> {
    Contrat findContratByDateDebutContratAndDateFinContrat(Date DateDebut , Date DateFin);
    @Query(value ="SELECT specialite , COUNT(*) FROM contrat GROUP BY specialite" , nativeQuery = true)
    List<Object> stat();



}
