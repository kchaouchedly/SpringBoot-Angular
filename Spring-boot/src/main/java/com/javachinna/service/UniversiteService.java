package com.javachinna.service;

import com.javachinna.model.Departement;
import com.javachinna.model.Universite;
import com.javachinna.repo.DepartementRepository;
import com.javachinna.repo.UniversiteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;


@Service
@Slf4j
public class UniversiteService implements IUniversiteService {
    @Autowired
    UniversiteRepository universiteRepository;
    @Autowired
    DepartementRepository departementRepository;
    //afficher par id
    public List<Universite> afficher_universiteId(Integer id){
        List<Universite> universites =universiteRepository.findAll();
        return  universites ;
    }
    //ajouter
    public Integer ajouter_universite(Universite universites) {
        universiteRepository.save(universites);
        log.info("Ajouter universite");
        return universites.getId();}

    // affichage
    @Override
    public List<Universite> afficherAlluniversite (){
        return universiteRepository.findAll();
    }
    //Modifier
    @Override
    public Universite updateUniversite (Universite universite){

        return universiteRepository.save(universite);
    }

    @Override
    public void removeUniversite(Integer id) {

    }
    //supprimer
  /*  @Override
    public void removeUniversite(Integer id) {
        universiteRepository.deleteAllById(Collections.singleton(id));
    }*/


   /* public void assignUniversiteToDepartement(Integer id, Long  idDepartement){

        Universite universite = universiteRepository.findById(id).orElse(null);
        Departement departement= departementRepository.findById(idDepartement).orElse(null);

        universite.getDepartements().add(departement);
        universiteRepository.save(universite);
    }
*/














    /** public Integer ajouter_universite(Universite universite) {
     universiteRepository.save(universite);
     log.info("Ajouter universite");
     //  return universiteRepository.getById( universite );**/
/**
 public ResponseEntity<Universite> afficher_universiteId(Long id ){
 Universite UNIVERSITE =universiteRepository.findById(Math.toIntExact(id))
 .orElseThrow(() ->new OpenApiResourceNotFoundException("not found  " + id ));
 return ResponseEntity.ok(UNIVERSITE);

 }**/
/**
 public ResponseEntity<Universite> modifier_universite (Long id , Universite u){
 Universite UNIVERSITE=universiteRepository.findById(Math.toIntExact(id))
 .orElseThrow(()-> new OpenApiResourceNotFoundException("not found "+id ));
 UNIVERSITE.setNomUniv(u.getNomUniv());
 UNIVERSITE.setDepartement(u.getDepartement());
 universiteRepository.save(UNIVERSITE);
 return ResponseEntity.ok(UNIVERSITE);

 }
 public  ResponseEntity<HttpStatus>supprimer_universite(Long id ){
 Universite UNIVERSITE=universiteRepository.findById(Math.toIntExact(id))
 .orElseThrow(()-> new OpenApiResourceNotFoundException("not found "+id ));
 universiteRepository.delete(UNIVERSITE);
 return new ResponseEntity<>(HttpStatus.NO_CONTENT);
 }




 **/
}
