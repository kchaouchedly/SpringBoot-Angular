package com.javachinna.service;

import com.javachinna.model.Contrat;


import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface IcontratService {

    public Contrat ajouter_Contrat(Contrat c);
    public String delet_Contrat(Long id);
    public List<Contrat> displayContrat();

    public void updateContrat (Contrat c, Long id );
    public void deletAllContrat();
    public Contrat getContratById(Long id);

    public void affectContratToEtudiant (Long idContrat,  String nomE ,  String prenomE);
    public void affecterContratEtudiant(Contrat c , Long idEtudiant);
    public float getChiffreAffaireEntreDeuxDate(String startDate, String endDate);

    public Integer nbContratsValides(String startDate, String endDate);
    public String sendSimpleMail();
    public String sendMailWithAttachment(Long idEtudiant, String dateD, String dateF , String specialite , int montant);
    public List< Object> stat();
}
