package com.javachinna.service;



import com.javachinna.model.DetailEquipe;

import java.util.List;

public  interface IDetailEquipe {
    public DetailEquipe addDetailEquipe(DetailEquipe det);
    public DetailEquipe updateDetailEquipe(DetailEquipe det,Integer idDetailEquipe);
    public DetailEquipe retrieveDetailEquipe(Integer idDetailEquipe);
    List<DetailEquipe> retrieveAllDetailEquipe();
    public DetailEquipe getById(Integer  idDetailEquipe);
    public void removeDetailEquipe(Integer  idDetailEquipe);
    DetailEquipe getOnedetailequipe(int idDetailEquipe );
}
