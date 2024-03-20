package com.barbershop.ru.project.models;


import com.barbershop.ru.project.models.staff.Staff;
import jakarta.persistence.*;


import java.util.List;

@Entity
@Table(name = "Service")
public class Service {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "price")
    private int price;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @ManyToMany
    @JoinTable(name = "master_service",
            joinColumns = { @JoinColumn(name = "service_id")},
            inverseJoinColumns = { @JoinColumn(name = "staff_id")})
    private List<Staff> masterCapablePerformingService;

    public Service() {
    }

    public Service(int price, String name, String description) {
        this.price = price;
        this.name = name;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Staff> getMasterCapablePerformingService() {
        return masterCapablePerformingService;
    }

    public void setMasterCapablePerformingService(List<Staff> masterCapablePerformingService) {
        this.masterCapablePerformingService = masterCapablePerformingService;
    }
}
