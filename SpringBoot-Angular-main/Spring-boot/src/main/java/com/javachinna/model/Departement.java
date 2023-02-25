package com.javachinna.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table( name ="Departmment")
@Getter
@Setter
public class Departement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idDepartment")
    private Long idDepartment;

    private String nomDepart ;

    private String email ;
    private String emplacement ;
    private String section ;
    private String description ;

    @OneToMany(mappedBy = "dept")
    private List<Etudiant> etds;

    @ManyToOne
    private Universite univ ;

}
