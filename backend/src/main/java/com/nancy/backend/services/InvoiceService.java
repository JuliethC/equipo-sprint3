package com.nancy.backend.services;

import java.util.List;

import com.nancy.backend.documents.Invoice;
import com.nancy.backend.repositories.InvoiceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {
    
    @Autowired
    SequeceService sequeceService;

    @Autowired
    private InvoiceRepository invoiceRepository;
    
    public List<Invoice> findAll() {
        return (List<Invoice>) invoiceRepository.findAll();
    }

    public Invoice save(Invoice invoice) {
        if (invoice.getId() == null) {
            invoice.setId(sequeceService.next("invoice"));
        }
        return invoiceRepository.save(invoice);
    }
}
