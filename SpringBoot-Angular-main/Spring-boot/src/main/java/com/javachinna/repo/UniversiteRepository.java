package com.javachinna.repo;

import com.javachinna.model.Universite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UniversiteRepository extends JpaRepository<Universite, Long> {
    List<Universite> findAllByIdLike(Integer idUniversite);


}
