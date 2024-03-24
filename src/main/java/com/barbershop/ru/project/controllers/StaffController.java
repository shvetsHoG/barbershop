package com.barbershop.ru.project.controllers;


import com.barbershop.ru.project.models.staff.Staff;
import com.barbershop.ru.project.services.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/appointment")
public class StaffController {

    private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @GetMapping("/masters")
    public List<Staff> getMasters() {
        return staffService.findAll();
    }

    @GetMapping("/master")
    public Staff getMaster() {
        return staffService.findOne(2);
    }
}
