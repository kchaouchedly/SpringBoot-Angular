package com.javachinna.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table( name ="Universite")
@Getter
@Setter
public class Universite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    //private Integer idUniv;
    private String nomUniv;
    private Integer Telephone;
    private String Adresse;
    private String Email;

    @OneToMany
    private Set<Departement> departements;
}
