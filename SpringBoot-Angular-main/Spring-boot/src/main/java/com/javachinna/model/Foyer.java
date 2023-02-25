package com.javachinna.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
@Table(name = "Foyer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Foyer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Idfoyer;
    @Temporal(TemporalType.DATE)
    private Date date_debutFoyer ;
    @Temporal(TemporalType.DATE)
    private Date date_FinFoyer ;
    private Integer nbplace;
    private Boolean restau;

    @Enumerated(EnumType.STRING)
    Type type;


}
