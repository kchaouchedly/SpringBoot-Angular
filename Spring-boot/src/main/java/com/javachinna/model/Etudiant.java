
package com.javachinna.model;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table( name ="Etudiant")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@EqualsAndHashCode
public class Etudiant implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name="idEtudiant")
    private Long idEtudiant; // Clé primaire
    private String prenomE;
    private String nomE;
    private String emailE;
    @ManyToOne
    private Departement dept ;

    @Temporal(TemporalType.DATE)
    private Date datedebut;
    @Enumerated(EnumType.STRING)
    Option opt ;
    @ManyToMany
    Set<Equipe> equipes ;
    @OneToMany(mappedBy = "etudiant")
    Set<Contrat> contrats ;


// Constructeur et accesseurs (getters) et mutateurs (setters)



    public Etudiant(String prenomE, String nomE, Option opt) {
        this.prenomE = prenomE;
        this.nomE = nomE;
        this.opt = opt;
    }


}
