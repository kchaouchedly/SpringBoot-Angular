package com.javachinna.service;


import com.javachinna.model.Contrat;
import com.javachinna.model.Departement;
import com.javachinna.model.Equipe;
import com.javachinna.model.Etudiant;
import com.javachinna.repo.ContratRepository;
import com.javachinna.repo.DepartementRepository;
import com.javachinna.repo.EquipeReposirory;
import com.javachinna.repo.EtudiantRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@Service
@Slf4j
public class EtudiantServiceImp implements IEtudiantService {

    @Autowired
    EtudiantRepository etudiantRepository ;
    @Autowired
    DepartementRepository departementRepository ;
    @Autowired
    ContratRepository contratRepository;
    @Autowired
    EquipeReposirory equipeRepository;
    @Override
    public Long ajouter_etudiant(Etudiant e) {
        etudiantRepository.save(e);
        log.info("ajouter etudiant");
        return e.getIdEtudiant();
    }

    @Override
    public String delet_etudiant(Long id) {
        etudiantRepository.deleteById(id);
        log.info("suprimé");
        return"etudiant suprimé";
    }

    @Override
    public List<Etudiant> displayEtudiant() {
        return etudiantRepository.findAll();


    }

    @Override
    public Etudiant getEtudById(Long id) {
        return etudiantRepository.findById(id).get();
    }

    @Override
    public void updateEtudiant(Etudiant e , Long id )
    {
        Etudiant etudiant = getEtudById(id);
        etudiant.setNomE(e.getNomE());
        etudiant.setPrenomE(e.getPrenomE());
        etudiant.setDatedebut(e.getDatedebut());
        etudiant.setOpt(e.getOpt());
        etudiantRepository.save(etudiant) ;



    }

    @Override
    public String deletAllEtudiant() {
        etudiantRepository.deleteAll();
        return "deleted";
    }
    @Transactional
    public void assignEtudiantToDepartement (Long etudiantId, Long departementId) {
        Etudiant etudiant = etudiantRepository.findById(etudiantId).orElse(null);
        Departement departement = departementRepository.findById(departementId).orElse(null);
        etudiant.setDept(departement);
        etudiantRepository.save(etudiant);
    }
    @Transactional
    public  Etudiant addAndAssignEtudiantToEquipeAndContract(Etudiant e, Long idContrat, Integer idEquipe)
    {
        Contrat contrat = contratRepository.findById(idContrat).orElse(null);
        Equipe equipe= equipeRepository.findById(idEquipe).orElse(null);
        contrat.setEtudiant(e);
        equipe.getEtudiants().add(e);
        contratRepository.save(contrat);
        equipeRepository.save(equipe);
        return e;
    }
}
