package com.javachinna.controller;


import com.javachinna.model.Foyer;
import com.javachinna.service.IfoyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/FoyerC")

public class FoyerController {
    @Autowired
    IfoyerService foyerService;

    //afficher foyer par id
    @GetMapping("{id}")
    public List<Foyer> afficherFoyerId(@PathVariable Integer Idfoyer ) {
        List<Foyer> foyers = foyerService.afficher_foyerId(Idfoyer);
        return foyers;}

    //Ajouter foyer

    @PostMapping("/addfoyer")
    @ResponseBody
    public Foyer ajouter_foyer(@RequestBody Foyer foyers){
        foyerService.ajouter_foyer(foyers);
        return foyers ; }

    @GetMapping("/Affichefoyer")
    public List<Foyer> GetAllFoyer (){
        return foyerService.afficherAllFoyer();   }

    @PutMapping("/updateFoyer")
    @ResponseBody
    public void  updateFoyer (@RequestBody Foyer foyer){
        foyerService.updateFoyer(foyer);}

    @DeleteMapping("/deleteFoyer/{Idfoyer}")
    @ResponseBody
    public void removeFoyer (@PathVariable("Idfoyer") Integer Idfoyer){
        foyerService.removeFoyer(Idfoyer);
    }





}
