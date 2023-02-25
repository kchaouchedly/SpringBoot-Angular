package com.javachinna.controller;

import com.javachinna.model.Etudiant;
import com.javachinna.service.IEtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/EtudiantC")
@CrossOrigin
public class EtudiantController {
    @Autowired
    IEtudiantService etudiantService;
    @GetMapping("/")
    public String hello(){return "hello world";}
    @PostMapping("/addEtudiant")
    @ResponseBody
    public void addEtudiant(@RequestBody Etudiant etudiant){
        etudiantService.ajouter_etudiant(etudiant);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEtudiant(@PathVariable Long id)
    {
        etudiantService.delet_etudiant(id);
    }
    @GetMapping(value = "/allEtudiant", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Etudiant> displayEtudiant()
    {
        return etudiantService.displayEtudiant();
    }
    @PutMapping("/updateEtudiant/{id}")
    public Etudiant updateEtud(@RequestBody Etudiant c, @PathVariable Long id){
        etudiantService.updateEtudiant(c,id);
        return c ;
    }
    @DeleteMapping("deletAllEtudiant")
    public String deletAllEtudiant(){
        return etudiantService.deletAllEtudiant();
    }
    @PutMapping("/affecterEtudiantToDep/{etudiantId}/{departementId}")
    public void affecterEtudiantToDep(@PathVariable("etudiantId") Long etudiantId , @PathVariable("departementId") Long departementId)
    {
        etudiantService.assignEtudiantToDepartement(etudiantId,departementId);
    }
    @PostMapping("/affecterEtudiantToEquipeAndContrat/{idEquipe}/{idContrat}")
    public Etudiant affecterEtudiantToEquipeAndContrat(@RequestBody Etudiant e , @PathVariable("idEquipe") Integer idEquipe,@PathVariable("idContrat") Long idContrat)
    {
        return  etudiantService.addAndAssignEtudiantToEquipeAndContract(e,idContrat,idEquipe);
    }
    @GetMapping("/GetById/{id}")
    public Etudiant getEtudById(@PathVariable Long id )
    {
        return etudiantService.getEtudById(id);
    }

}
