package com.barbershop.ru.project.models;

import com.barbershop.ru.project.models.staff.Staff;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Barbershop")
public class Barbershop {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @OneToMany(mappedBy = "barbershop")
    public List<Staff> staff;

    public Barbershop() {

    }

    public Barbershop(String address, String phone) {
        this.address = address;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Staff> getStaff() {
        return staff;
    }

    public void setStaff(List<Staff> staff) {
        this.staff = staff;
    }
}
