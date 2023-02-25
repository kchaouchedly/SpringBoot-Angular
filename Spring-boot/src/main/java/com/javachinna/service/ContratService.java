package com.javachinna.service;


import com.javachinna.model.Contrat;
import com.javachinna.model.Etudiant;
import com.javachinna.repo.ContratRepository;
import com.javachinna.repo.EtudiantRepository;
import com.javachinna.service.IcontratService;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;
import java.io.File;
import java.time.Clock;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import  static  com.javachinna.model.Specialite.*;



@Service
@Slf4j
public class ContratService implements IcontratService {
    @Autowired
    ContratRepository contratRepository ;
    @Autowired
    EtudiantRepository etudiantRepository;

    @Autowired private JavaMailSender javaMailSender;

   // @Value("${spring.mail.username}") private String sender;

    @Override
    public Contrat ajouter_Contrat(Contrat c) {
        contratRepository.save(c);
        return c;
    }

    @Override
    public String delet_Contrat(Long id) {
        contratRepository.deleteById(id);
        return "deleted";
    }

    @Override
    public List<Contrat> displayContrat() {
       return contratRepository.findAll();
    }

    @Override
    public void updateContrat(Contrat c, Long id) {
       Contrat contrat=getContratById(id);
        contrat.setMontantContrat(c.getMontantContrat());
        contrat.setDateDebutContrat(c.getDateDebutContrat());
        contrat.setDateFinContrat(c.getDateFinContrat());
        contrat.setSpecialite(c.getSpecialite());
        contratRepository.save(contrat);
    }

    @Override
    public void deletAllContrat() {
        contratRepository.deleteAll();
    }

    @Override
    public Contrat getContratById(Long id) {
        return contratRepository.findById(id).get();
    }
    @Transactional
    public void affectContratToEtudiant (Long idContrat,  String nomE ,  String prenomE )
    {log.info("aaaa");
        Etudiant etudiant = etudiantRepository.findEtudiantByNomEAndPrenomE(nomE,prenomE);
       // Etudiant etudiant = etudiantRepository.findById(id).orElse(null);
        log.info("test", etudiant);
        Contrat contrat= contratRepository.findById(idContrat).orElse(null);
        log.info("test1");
        contrat.setEtudiant(etudiant);
        log.info("test2");
        contratRepository.save(contrat);
        log.info("test3");

    }

    @Override
    public void affecterContratEtudiant(Contrat c, Long idEtudiant) {
        Etudiant e = etudiantRepository.findById(idEtudiant).orElse(null);

        c.setEtudiant(e);
        contratRepository.save(c);
    }

    @Override
    public float getChiffreAffaireEntreDeuxDate(String startDate, String endDate) {
        float chiffre= 0 ;
        Date d1 = new Date();
        d1.setMonth(Integer.parseInt(startDate.substring(6 ,7)));
        d1.setYear(Integer.parseInt(startDate.substring(1,4)));
        d1.setDate(Integer.parseInt(startDate.substring(9,10)));
        Date d2 = new Date();
        d2.setMonth(Integer.parseInt(startDate.substring(6 ,7)));
        d2.setYear(Integer.parseInt(startDate.substring(1,4)));
        d2.setTime(Integer.parseInt(startDate.substring(9,10)));

        for (Contrat c : contratRepository.findAll()
        ) {


            if (//(c.getDateDebutContrat().compareTo(d1) <= 0) & (c.getDateFinContrat().compareTo(d2) >= 0)
                    !c.isArchive()) {

                if (c.getSpecialite() == IA) {
                    chiffre = chiffre + 300 * (c.getDateFinContrat().getMonth() - c.getDateDebutContrat().getMonth());

                } else if (c.getSpecialite() == RESEAUX) {
                    chiffre =chiffre + 350 * (c.getDateFinContrat().getMonth() - c.getDateDebutContrat().getMonth());

                } else if (c.getSpecialite() == CLOUD) {
                    chiffre = chiffre + 400 * (c.getDateFinContrat().getMonth() - c.getDateDebutContrat().getMonth());
                } else {
                    chiffre = chiffre + 450*(c.getDateFinContrat().getMonth() - c.getDateDebutContrat().getMonth());
                }
            }
        }

        return chiffre;
    }

    @Override
    public Integer nbContratsValides(String startDate, String endDate) {
        int i = 0;
        Date d1 = new Date();
        d1.setMonth(Integer.parseInt(startDate.substring(6 ,7)));
        d1.setYear(Integer.parseInt(startDate.substring(1,4)));
        d1.setDate(Integer.parseInt(startDate.substring(9,10)));
        Date d2 = new Date();
        d2.setMonth(Integer.parseInt(startDate.substring(6 ,7)));
        d2.setYear(Integer.parseInt(startDate.substring(1,4)));
        d2.setTime(Integer.parseInt(startDate.substring(9,10)));
        for (Contrat c : contratRepository.findAll()
             ) {
            if( (c.getDateDebutContrat().compareTo(d1) <= 0) & (c.getDateFinContrat().compareTo(d2) >= 0) & !c.isArchive()){
                i=i+1;

            }

            
        }
        
        return i;
    }

    public String sendSimpleMail()
    {

        // Try block to check for exceptions
        try {

            // Creating a simple mail message
            SimpleMailMessage mailMessage
                    = new SimpleMailMessage();

            // Setting up necessary details
            mailMessage.setFrom("omarcharfii12@outlook.fr");
            mailMessage.setTo("omar.charfi@esprit.tn");
            mailMessage.setText("wseel");
            mailMessage.setSubject("spring");

            // Sending the mail
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...";
        }  // Catch block to handle the exceptions
        catch (Exception e) {
            return "Error while Sending Mail";
        }

}

    public String sendMailWithAttachment(Long idEtudiant, String dateD, String dateF , String specialite, int montant)
    {
        Etudiant e = etudiantRepository.findById(idEtudiant).orElse(null);
        // Creating a mime message
        MimeMessage mimeMessage
                = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;

        try {

            // Setting multipart as true for attachments to
            // be send
            mimeMessageHelper
                    = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom("springbootanulattest@gmail.com");
            mimeMessageHelper.setTo(e.getEmailE());
          /* mimeMessageHelper.setText("Date Debut : "+dateD);
            mimeMessageHelper.setText("Date Fin : "+dateF);
            mimeMessageHelper.setText("Specialite : "+specialite);
            mimeMessageHelper.setText("Montant Contrat : "+montant);*/
            mimeMessageHelper.setText("Date Debut : "+dateD+
                            "Date Fin : "+dateF+
                    "Specialite : "+specialite+
                            "Montant Contrat : "+montant+
                    "Bonne courage");

            mimeMessageHelper.setSubject("NEW CONTRAT");

            // Adding the attachment
            FileSystemResource file
                    = new FileSystemResource(
                    new File("C:\\Users\\Hp\\Downloads\\angular-spring-boot-email-integration-main\\angular-spring-boot-email-integration-main\\angular-12-social-login\\src\\assets\\img\\logo.png"));

            mimeMessageHelper.addAttachment(
                    file.getFilename(), file);

            // Sending the mail
            javaMailSender.send(mimeMessage);
            return "Mail sent Successfully";
        }

        // Catch block to handle MessagingException
        catch (MessagingException t) {

            // Display message when exception occurred
            return "Error while sending mail!!!";
        }
    }

    public List<Object> stat(){
        return contratRepository.stat();
    }
}



