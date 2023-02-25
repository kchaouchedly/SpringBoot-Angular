package com.javachinna.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table( name ="Reclamation")
@Getter
@Setter
public class Reclamation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idReclamation")
    private Long idReclamation;

    private String nomRec ;
    private String sujet ;
    private String contenu;
    @Temporal(TemporalType.DATE)
    private Date daterec;
}
