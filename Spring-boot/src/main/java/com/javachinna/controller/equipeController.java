package com.javachinna.controller;


import com.javachinna.Models.EquipeModel;
import com.javachinna.model.Equipe;
import com.javachinna.repo.EquipeReposirory;
import com.javachinna.service.DetailEquipeService;
import com.javachinna.service.EquipeService;
import com.javachinna.service.ExportEquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/equipe")
public class equipeController {

    List<Equipe> E = new ArrayList<Equipe>();
@Autowired
DetailEquipeService detailEquipeService;
    @Autowired
    EquipeService equipeService;
    @Autowired
 EquipeReposirory repo;
    @Autowired
    ExportEquipeService exportequipeService;

    @PostMapping("/addEqui")
    void addEquipe(@RequestBody EquipeModel model){
       Equipe equipe =new Equipe();
       equipe.setNomEquipe(model.getNomEquipe());
        equipe.setNiveau(model.getNiveau());

    this.equipeService.addEquipe(equipe);


    }

    @PostMapping("/addEq")
    public Equipe addEquipee(@RequestBody Equipe e){
        return equipeService.addEquipe(e);

    }
    @PutMapping("/editEq/{idEquipe}")
    public Equipe updateEquipe(@RequestBody Equipe e,@PathVariable Integer idEquipe){
        return equipeService.updateEquipe(e,idEquipe);

    }

    @GetMapping("/retrieveEq/{idEq}")
    public Equipe getEqById(@PathVariable Integer idEq){
        return equipeService.retrieveEquipe(idEq);

    }
    @GetMapping("/listeEq")
    public List<Equipe> listeEquipe(){
        return equipeService.getAllEquipes();

    }
    @GetMapping("/liste")
    public ResponseEntity<List<Equipe>> showpage(@RequestParam int page,@RequestParam int size){
        Pageable  pageable=PageRequest.of(page,size);
   List<Equipe> list=repo.findAll(pageable).getContent();
      return ResponseEntity.ok(list);
    }
    @GetMapping("/listeEquope")
    List<Equipe> listeEquipef(){
        return this.equipeService.getAllEquipes();

    }
    @DeleteMapping("/deleteE/{idEquipe}")
    public void deleteEquipe(@PathVariable Integer idEquipe){
        equipeService.removeEquipe(idEquipe);
    }
    @GetMapping("/getById/{idEquipe}")
    public Equipe getEtudiantById(@PathVariable Integer idEquipe){
        return equipeService.getById(idEquipe);

    }
    @GetMapping("/export/pdf")
    public ResponseEntity<InputStreamResource> exportTermsPDF(){
    List<Equipe> equipes =(List<Equipe>) equipeService.getAllEquipes();
        ByteArrayInputStream bais= exportequipeService.equipeexportpdf(equipes);
        HttpHeaders headers=new HttpHeaders();
        headers.add("content-Disposition","inline; filename=equipes.pdf");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(new InputStreamResource(bais));


    }

    @GetMapping("/excel")
    public ResponseEntity<InputStreamResource> exportTermsExcel() throws IOException {
        List<Equipe> equipes =(List<Equipe>) equipeService.getAllEquipes();
        ByteArrayInputStream bais= exportequipeService.equipeexportexcel(equipes);
        HttpHeaders headers=new HttpHeaders();
        headers.add("content-Disposition","inline; filename=equipes.xlsx");
        return ResponseEntity.ok().headers(headers).body(new InputStreamResource(bais));


    }
    @GetMapping("/paging")
    public ResponseEntity<Map<String,Object>>findALLpaging(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "2")int size){
return  new ResponseEntity<>(this.equipeService.findAll(page, size), HttpStatus.OK);

    }
    @GetMapping("/find/{nomEquipe}")
    public List<Equipe> findNom (@PathVariable("nomEquipe") String nomEquipe) {
        return repo.findByNomEquipe(nomEquipe);
    }


}
