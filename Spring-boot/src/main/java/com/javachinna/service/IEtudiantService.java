package com.javachinna.service;

import com.javachinna.model.Etudiant;


import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface IEtudiantService {

    public Long ajouter_etudiant(Etudiant e);
    public String delet_etudiant(Long id);
    public List<Etudiant> displayEtudiant();
    public Etudiant getEtudById(Long id);

    public void updateEtudiant (Etudiant e , Long id );

    public String deletAllEtudiant();
    public void assignEtudiantToDepartement (Long etudiantId, Long departementId);

    public  Etudiant addAndAssignEtudiantToEquipeAndContract(Etudiant e, Long idContrat, Integer idEquipe);
}
