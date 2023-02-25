package com.javachinna.controller;


import com.javachinna.model.Contrat;
import com.javachinna.service.IcontratService;
import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

//import org.thymeleaf.spring5.SpringTemplateEngine;
//import tn.esprit.spring.configuration.EmailThymeleafConfiguration;


import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/ContratC")
@CrossOrigin
public class ContratController {


   // SpringTemplateEngine templateEngine;


    @Autowired
    private JavaMailSender sender;
    @Autowired
    IcontratService icontratService;

    @GetMapping("/")
    public String hello() {
        return "hello world";
    }

    @PostMapping("/addContrat")
    @ResponseBody
    public void addContrat(@RequestBody Contrat c) throws Exception {

        icontratService.ajouter_Contrat(c);

    }

    @DeleteMapping("/deletContrat/{id}")
    public void deletContrat(@PathVariable Long id) {
        icontratService.delet_Contrat(id);
    }

    @GetMapping("/allContrat")
    public List<Contrat> displayContrat() {
        return icontratService.displayContrat();
    }

    @PutMapping("/updateContrat/{id}")
    public Contrat updateContrat(@RequestBody Contrat c, @PathVariable Long id) {
        icontratService.updateContrat(c, id);
        return c;
    }

    @GetMapping("/GetById/{id}")
    public Contrat getContratById(@PathVariable Long id) {
        return icontratService.getContratById(id);
    }

    @DeleteMapping("/deletAllContrat")
    public String deletAllContrat() {
        icontratService.deletAllContrat();
        return "deleted";
    }

    @PutMapping("/affecterContratToEtudiant/{idContrat}/{nomE}/{prenomE}")
    public void affecterContratToEtudiant(@PathVariable("idContrat") Long idContrat, @PathVariable("nomE") String nomE, @PathVariable("prenomE") String prenomE) {
        icontratService.affectContratToEtudiant(idContrat, nomE, prenomE);
    }

    @GetMapping("/affecterContratEtudiant/{idContrat}/{idEtudiant}")
    public void affecterCE(Contrat c,@PathVariable("idEtudiant") Long idEtudiant)
    {
        icontratService.affecterContratEtudiant(c,idEtudiant);
    }

    @GetMapping("/chiffreEntreDateEtDateF/{DateD}/{DateF}")
    public float getchiffre(@PathVariable("DateD") String DateD, @PathVariable String DateF) {
        return icontratService.getChiffreAffaireEntreDeuxDate(DateD, DateF);
    }

    @GetMapping("/nbrContratIsArchive/{DateD}/{DateF}")
    public Integer nbrArchive(@PathVariable("DateD") String DateD, @PathVariable String DateF) {
        return icontratService.nbContratsValides(DateD, DateF);
    }




    @GetMapping("/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=Contrats_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<Contrat> listContrats = icontratService.displayContrat();

        ContratPDFExporter exporter = new ContratPDFExporter(listContrats);
        exporter.export(response);

    }

    @GetMapping("/pdfbyid/{id}")
    public void exportToPDFById(HttpServletResponse response , @PathVariable Long id) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=Contrats_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        Contrat contrat= icontratService.getContratById(id);

        ContratPDFById exporter = new ContratPDFById(contrat);
        exporter.export(response);


    }


    @GetMapping ("/sendMail")
    public String sendMail()
    {
        String status
                = icontratService.sendSimpleMail();

        return status;
    }

    @GetMapping("/sendMailWithAttachment/{idEtudiant}/{dateD}/{dateF}/{specialite}/{montant}")
    public String sendMailWithAttachment(@PathVariable("idEtudiant") Long idEtudiant,@PathVariable("dateD") String dateD ,@PathVariable("dateF") String dateF,@PathVariable("specialite") String specialite,
                                         @PathVariable("montant") int montant  )
    {
        String status
                = icontratService.sendMailWithAttachment(idEtudiant,dateD,dateF,specialite,montant);

        return status;
    }
    @GetMapping("/stat")
    public List<Object> stat(){
        return icontratService.stat();
    }
}
