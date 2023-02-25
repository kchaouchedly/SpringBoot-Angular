package com.javachinna.service;

import com.javachinna.model.Departement;
import com.javachinna.model.Etudiant;


import java.io.ByteArrayInputStream;
import java.util.List;

public interface IDepartmentService {
    public Long ajouter_Department(Departement d);
    public String delet_Department(Long id);
    public List<Departement> displayDepartment();


    public void updatedepartement( Departement d,Long id  ) ;
    public Departement getDepById(Long id) ;
    public String deletAllDEP();
    public List<Etudiant> getEtudiantsByDepartement (Long idDepartement);


    public ByteArrayInputStream departementPdfReport(List<Departement> departements);

}
