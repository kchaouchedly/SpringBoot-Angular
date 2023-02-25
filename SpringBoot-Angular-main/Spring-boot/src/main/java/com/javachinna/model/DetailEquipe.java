package com.javachinna.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
@Entity
@Table( name ="DetailEquipe")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetailEquipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idDetailEquipe")
    private Integer idDetailEquipe;

    private Integer salle ;

    private String thematique ;

    @ManyToOne
    private Equipe equipe;
}
