package com.nancy.backend.controllers;

import java.util.List;

import com.nancy.backend.documents.Detail;
import com.nancy.backend.services.DetailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/details")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class DetailController {
    
    @Autowired
    private DetailService detailService;
    
    @GetMapping
    public List<Detail> findAll() {
        return detailService.findAll();
    }
    
    @PostMapping
    public Detail save(@RequestBody Detail detail) {
        return detailService.save(detail);
    }
    
}
