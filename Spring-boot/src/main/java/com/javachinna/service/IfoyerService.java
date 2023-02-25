package com.javachinna.service;



import com.javachinna.model.Foyer;

import java.util.List;

public interface IfoyerService {
    List<Foyer> afficher_foyerId(Integer idfoyer);


    public  Integer ajouter_foyer(Foyer foyers);

    public List<Foyer> afficherAllFoyer();
    public Foyer updateFoyer (Foyer foyer);
    public void removeFoyer (Integer idfoyer);
}
