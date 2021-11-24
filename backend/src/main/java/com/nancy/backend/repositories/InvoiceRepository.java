package com.nancy.backend.repositories;

import com.nancy.backend.documents.Invoice;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends MongoRepository<Invoice, Long> {
    
}
