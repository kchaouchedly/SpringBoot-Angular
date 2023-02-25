package com.javachinna.service;

import com.javachinna.model.Reclamation;
import com.javachinna.repo.ReclamationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;

@Service
@Slf4j
public class ReclamationService implements IReclamationService{

    @Autowired
    ReclamationRepository reclamationRepository ;

    @Override
    public Long ajouter_Reclamation(Reclamation d) {
        reclamationRepository.save(d);
        return d.getIdReclamation();
    }

    @Override
    public String delet_Reclamation(Long id) {
        reclamationRepository.deleteById(id);
        return "deleted";
    }

    @Override
    public List<Reclamation> displayReclamation() {
        return reclamationRepository.findAll();
    }

    @Override
    public Reclamation getDepById(Long id) {
        return reclamationRepository.findById(id).get();
    }
    @Override
    public void updatereclamation(Reclamation d, Long id)
    {
        Reclamation reclamation = getDepById(id);
        reclamation.setNomRec(d.getNomRec());
        reclamation.setSujet(d.getSujet());
        reclamation.setContenu(d.getContenu());


        reclamation.setDaterec(d.getDaterec());



        reclamationRepository.save(reclamation) ;



    }
    @Override
    public String deletAllDEP() {
        reclamationRepository.deleteAll();
        return "deleted";
    }



}
