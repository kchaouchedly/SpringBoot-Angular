package com.javachinna.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.io.DataInput;
import java.io.Serializable;
import java.util.Date;
@Entity
@Table( name ="Contrat")
@Getter
@Setter
public class Contrat implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idContrat")
    private Long idContrat;
    @Temporal(TemporalType.DATE)
    private Date dateDebutContrat ;
    @Temporal(TemporalType.DATE)
    private Date dateFinContrat ;

    private boolean archive ;

    @ManyToOne(cascade = CascadeType.ALL)
    Etudiant etudiant;

    private Integer montantContrat ;

    @Enumerated(EnumType.STRING)
    Specialite specialite ;


}
