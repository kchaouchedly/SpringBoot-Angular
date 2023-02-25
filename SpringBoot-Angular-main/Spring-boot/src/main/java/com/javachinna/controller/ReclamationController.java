package com.javachinna.controller;

import com.javachinna.model.Reclamation;
import com.javachinna.service.IReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
@RequestMapping("/ReclamationC")
@CrossOrigin
public class ReclamationController {

    @Autowired
    IReclamationService ir ;
    @GetMapping("/")
    public String hello(){return "hello world";}
    @PostMapping("/addRec")
    public void addRec(@RequestBody Reclamation d)
    {
        ir.ajouter_Reclamation(d);
    }
    @DeleteMapping("/deletREC/{id}")
    public void deletRec(@PathVariable Long id )
    {
        ir.delet_Reclamation(id);
    }
    @GetMapping("/allREC")
    public List<Reclamation> displayREC()
    {
        return ir.displayReclamation();
    }
    @PutMapping("/updateREC/{id}")
    public Reclamation updateREC(@RequestBody Reclamation d,@PathVariable Long id)
    {
        ir.updatereclamation(d,id);
        return d;
    }
    @DeleteMapping("deletAllREC")
    public String deletAllREC()
    {
        return ir.deletAllDEP();
    }
}
