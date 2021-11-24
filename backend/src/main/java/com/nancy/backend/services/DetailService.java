package com.nancy.backend.services;

import java.util.List;

import com.nancy.backend.documents.Detail;
import com.nancy.backend.repositories.DetailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailService {

    @Autowired
    SequeceService sequeceService;

    @Autowired
    private DetailRepository detailRepository;

    public List<Detail> findAll() {
        return (List<Detail>) detailRepository.findAll();
    }

    public Detail save(Detail detail) {
        if (detail.getId() == null) {
            detail.setId(sequeceService.next("detail"));
        }
        return detailRepository.save(detail);
    }
    
}
