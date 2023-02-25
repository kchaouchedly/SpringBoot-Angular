package com.javachinna.controller;

import com.javachinna.model.Departement;
import com.javachinna.model.Universite;
import com.javachinna.service.IUniversiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/UniversiteC")
public class UniversiteController {
    @Autowired
    IUniversiteService universiteService;

    //afficher universite par id
    @GetMapping("{id}")
    public List<Universite> afficherUniversiteparId(@PathVariable Integer id ){
        List<Universite> universites =universiteService.afficher_universiteId(id);
        return universites ;
    }
    //Ajouter universite

    @PostMapping("/adduniversite")
    @ResponseBody
    public Universite ajouter_universite(@RequestBody Universite universites){
        universiteService.ajouter_universite(universites);
        return universites;
    }

    @GetMapping("/AfficheUniv")
    public List<Universite> GetAlluniversite (){
        return universiteService.afficherAlluniversite();   }

    @PutMapping("/updateUniversite")
    @ResponseBody
    public void  updateUniversite (@RequestBody Universite universite){
        universiteService.updateUniversite(universite);
    }
    @DeleteMapping("/deleteUniversite/{universite-id}")
    @ResponseBody
    public void removeUniversite (@PathVariable("universite-id") Integer iduniv){
        universiteService.removeUniversite(iduniv);
    }

    @PutMapping(value = "/affectationUni_dep/{Uni-id}/{dep-id}")
    public void affectationUniversiteDepartement(@PathVariable("Uni-id") Integer id ,@PathVariable("dep-id") Long idDepartement )
    {
        IUniversiteService.assignUniversiteToDepartement(id,idDepartement);
    }












    /**   //afficher
     @GetMapping("/afficher")
     public List<Universite> afficherUniversite (){
     return universiteService.afficher_universite();
     }
     **/

/**
 @PutMapping("/modifier/{id}")
 public ResponseEntity<Universite> modifieruniversite (@PathVariable Long id , @RequestBody Universite u ){
 return  universiteService.modifier_universite(id,u);
 }
 //supprimer universite
 @DeleteMapping("/supprimer/{id}")
 public  ResponseEntity<HttpStatus>supprimeruniversite(@PathVariable  Long id ){
 return universiteService.supprimer_universite(id);
 }
 /** @PutMapping(value="/affecter_universite_departement/{idUniv}/{idDepart}")
 @ResponseBody
 public void affecteretudiantdepartement(@PathVariable("idEtudiant") Long idEtudiant,@PathVariable("idDepart")Long idDepart){
 universiteService.assignUniversiteToDepartement(idEtudiant,idDepart);
 }
 **/
    /** //ajout
     @PostMapping("/addUniversite")
     @ResponseBody
     public Universite addUniversite (@RequestBody Universite universite){

     universiteService.ajouter_universite(universite);
     return universite ;
     }




     **/






}
