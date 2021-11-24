package com.nancy.backend.controllers;

import java.util.List;

import com.nancy.backend.documents.Invoice;
import com.nancy.backend.services.InvoiceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/invoices")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class InvoiceController {
    
    @Autowired
    private InvoiceService invoiceService;

    @GetMapping
    public List<Invoice> findAll() {
        return invoiceService.findAll();
    }

    @PostMapping
    public Invoice save(@RequestBody Invoice invoice) {
        return invoiceService.save(invoice);
    }
}
