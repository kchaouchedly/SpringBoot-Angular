package com.javachinna.service;


import com.javachinna.model.DetailEquipe;
import com.javachinna.repo.DetailEquipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public class  DetailEquipeService implements IDetailEquipe {

@Autowired
DetailEquipeRepository detailequiperepository ;


    @Override
    public DetailEquipe addDetailEquipe(DetailEquipe det) {
        return detailequiperepository.save(det);
    }

    @Override
    public DetailEquipe updateDetailEquipe(DetailEquipe det ,Integer idDetailEquipe) {
      DetailEquipe detailEquipe =this.getOnedetailequipe(idDetailEquipe);
      detailEquipe.setSalle(det.getSalle());
      detailEquipe.setThematique(det.getThematique());
      detailEquipe.setEquipe(det.getEquipe());
      return  this.detailequiperepository.save(detailEquipe);
    }

    @Override
    public DetailEquipe retrieveDetailEquipe(Integer idDetailEquipe) {
        return detailequiperepository.findById(idDetailEquipe).orElse(null);
    }

    @Override
    public List<DetailEquipe> retrieveAllDetailEquipe() {
        return this.detailequiperepository.findAll();
    }

    @Override
    public DetailEquipe getById(Integer idDetailEquipe) {
        return detailequiperepository.findById(idDetailEquipe).orElse(null);
    }



    @Override
    public void removeDetailEquipe(Integer idDetailEquipe) {

        this.detailequiperepository.deleteById(idDetailEquipe);
    }

    @Override
    public DetailEquipe getOnedetailequipe(int idDetailEquipe) {
        return this.detailequiperepository.findById(idDetailEquipe).get();
    }
}
