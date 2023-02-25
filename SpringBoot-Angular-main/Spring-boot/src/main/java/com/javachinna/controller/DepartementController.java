package com.javachinna.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.javachinna.model.Departement;
import com.javachinna.model.Etudiant;
import com.javachinna.repo.DepartementRepository;
import com.javachinna.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.ByteArrayInputStream;
import java.util.List;

@RestController
@RequestMapping("/DepartementC")
@CrossOrigin
public class DepartementController {
    @Autowired
    DepartementRepository departementRepository ;
    @Autowired
    IDepartmentService iDepartmentService;
    @GetMapping("/")
    public String hello(){return "hello world";}
    @PostMapping("/addDep")

    public void addDEP(@RequestBody Departement d)
    {
        iDepartmentService.ajouter_Department(d);
    }
    @DeleteMapping("/deletDEP/{id}")
    public void deletDep(@PathVariable Long id )
    {
        iDepartmentService.delet_Department(id);
    }
    @GetMapping("/allDEP")
    public List<Departement> displayDEP()
    {
        return iDepartmentService.displayDepartment();
    }
    @PutMapping("/updateDEP/{id}")
    public Departement updateDEP(@RequestBody Departement d,@PathVariable Long id)
    {
        iDepartmentService.updatedepartement(d,id);
        return d;
    }
    @DeleteMapping("/deletAllDEP")
    public String deletAllDEP()
    {
        return iDepartmentService.deletAllDEP();
    }
    @GetMapping ("/getEtudiantsByDep/{idDepartement}")
    List<Etudiant> getListEtudiantByDepartement(@PathVariable("idDepartement") Long idDepartement)
    {
        return iDepartmentService.getEtudiantsByDepartement(idDepartement);
    }
    @GetMapping("/GetById/{id}")
    public Departement getDepById(@PathVariable Long id )
    {
        return iDepartmentService.getDepById(id);
    }
    @GetMapping("/export/pdf")
    public ResponseEntity<InputStreamResource> expoortTermsPdf(){
        Departement departement= new Departement() ;
        List<Departement> departements=(List<Departement>) departementRepository.findAll();
        ByteArrayInputStream bais = iDepartmentService.departementPdfReport(departements);
        HttpHeaders headers =new HttpHeaders();

        headers.add("Content-Disposition","inline ; filename=departement.pdf");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(new InputStreamResource(bais));

    }
}
