

package com.javachinna.service;
import com.javachinna.model.Foyer;
import com.javachinna.repo.FoyerRepopsitory;
import com.javachinna.service.IfoyerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Collections;
import java.util.List;

@Service
@Slf4j
public class FoyerService implements IfoyerService {
    @Autowired
    FoyerRepopsitory foyerRepopsitory;

    //afficher par id
    public List<Foyer> afficher_foyerId(Integer Idfoyer){
        List<Foyer> foyers =foyerRepopsitory.findAll();
        return  foyers ; }
    //ajouter
    public Integer ajouter_foyer(Foyer foyers) {
        foyerRepopsitory.save(foyers);
        log.info("Ajouter foyer");
        return foyers.getIdfoyer(); }
    // affichage
    @Override
    public List<Foyer> afficherAllFoyer (){
        return foyerRepopsitory.findAll(); }

    //Modifier
    @Override
    public Foyer updateFoyer (Foyer foyer){
        return foyerRepopsitory.save(foyer); }

    @Override
    public void removeFoyer(Integer idfoyer) {

    }

    //supprimer
   /* @Override
    public void removeFoyer(Integer Idfoyer) {
        foyerRepopsitory.deleteAllById(Collections.singleton(Idfoyer));
    }
*/
}
