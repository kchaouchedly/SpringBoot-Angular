package com.javachinna.service;

import com.javachinna.model.Departement;
import com.javachinna.model.Universite;


import java.util.List;

public interface IUniversiteService {
    /**   public long ajouter_universite(Universite u);

     public ResponseEntity<Universite> modifier_universite (Long id , Universite u);
     public  ResponseEntity<HttpStatus>supprimer_universite(Long id );
     //public List<Universite> afficher_universite();**/

    public List<Universite> afficher_universiteId(Integer id);

    public  Integer ajouter_universite(Universite universites);

    public List<Universite> afficherAlluniversite();
    public Universite updateUniversite (Universite universite);
    public void removeUniversite (Integer id);

    static void assignUniversiteToDepartement(Integer id, Long idDepartement) {

    }

}
