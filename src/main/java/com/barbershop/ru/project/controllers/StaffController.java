package com.barbershop.ru.project.controllers;


import com.barbershop.ru.project.services.StaffService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/appointment")
public class StaffController {

    private final StaffService staffService;
    ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }


    @GetMapping()
    public String sayHello() {
        return null;
    }

    @GetMapping("/masters")
    public String getMasters() {return null;}

}
