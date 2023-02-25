package com.javachinna.service ;



import com.javachinna.model.Reclamation;

import java.util.List;

public interface IReclamationService {
    public Long ajouter_Reclamation(Reclamation d);

   public String delet_Reclamation(Long id);

    public List<Reclamation> displayReclamation();

    public Reclamation getDepById(Long id);

    public void updatereclamation(Reclamation d, Long id);

   public String deletAllDEP();
}
