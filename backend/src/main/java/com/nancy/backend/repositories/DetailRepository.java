package com.nancy.backend.repositories;

import com.nancy.backend.documents.Detail;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailRepository extends MongoRepository<Detail, Long>{
    
}
