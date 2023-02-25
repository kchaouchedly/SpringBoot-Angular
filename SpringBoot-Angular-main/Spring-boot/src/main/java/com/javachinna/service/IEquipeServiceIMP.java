package com.javachinna.service;

import com.javachinna.model.Equipe;
import com.javachinna.repo.EquipeReposirory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IEquipeServiceIMP implements EquipeService {
@Autowired
EquipeReposirory equipereposirory;




    @Override
    public Equipe addEquipe(Equipe e) {
        return equipereposirory.save(e);
    }

    @Override
    public Equipe updateEquipe(Equipe e,Integer idEquipe) {
       Equipe EquipeUpdate=  equipereposirory.findById(idEquipe).get();
       EquipeUpdate.setNomEquipe(e.getNomEquipe());
       EquipeUpdate.setNiveau((e.getNiveau()));
       return  equipereposirory.save(EquipeUpdate);
    }


    @Override
    public Equipe retrieveEquipe(Integer idEq) {
        return equipereposirory.findById(idEq).orElse(null);
    }

    @Override
    public List<Equipe> getAllEquipes() {
        return this.equipereposirory.findAll();
    }

    @Override
    public void removeEquipe(Integer idEquipe) {

        equipereposirory.deleteById(idEquipe);
    }
    @Override
    public Equipe getById(Integer idEquipe) {
        return equipereposirory.findById(idEquipe).orElse(null);
    }



    @Override
    public Map<String, Object> findAll(int page, int size) {
        try {
            List<Equipe> equipeList = new ArrayList<>();
            Pageable paging= PageRequest.of(page, size);
            Page<Equipe> pageequipe=this.equipereposirory.findAll(paging);
            equipeList = pageequipe.getContent();
            Map<String,Object> equipes=new HashMap<>();
            equipes.put("equipes",equipeList);
            equipes.put("pageCurrent",pageequipe.getNumber());
            equipes.put("totalItems",pageequipe.getTotalElements());
            equipes.put("totalPage",pageequipe.getTotalPages());
            return  equipes;


        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
        }

    }