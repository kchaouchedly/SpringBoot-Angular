package com.javachinna.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Table( name ="Equipe")
@Getter
@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Equipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idEquipe")
    private Integer idEquipe;

    private String nomEquipe ;

    private String niveau ;
    @ManyToMany(mappedBy = "equipes")
    Set<Etudiant> etudiants ;
    @JsonIgnoreProperties(value="equipe")
    @OneToMany(mappedBy = "equipe",cascade=CascadeType.ALL)

    private List<DetailEquipe> detailEquipes;
    private String fileName;
}
