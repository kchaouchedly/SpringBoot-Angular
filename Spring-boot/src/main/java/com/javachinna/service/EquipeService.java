package com.javachinna.service;


import com.javachinna.model.Equipe;


import java.util.List;
import java.util.Map;

public  interface EquipeService  {
    public Equipe addEquipe(Equipe e);
    public Equipe updateEquipe(Equipe e,Integer idEquipe);
    public Equipe retrieveEquipe(Integer idEq);
     List<Equipe> getAllEquipes();
    public void removeEquipe(Integer idEquipe);
    public Equipe getById(Integer idEquipe);

Map<String,Object> findAll(int page, int size);
}
