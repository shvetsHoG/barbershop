package com.barbershop.ru.project.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Client")
public class Client {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "mail")
    private String mail;

    @OneToMany(mappedBy = "client")
    private List<Appointment> appointments;

    public Client() {

    }

    public Client(String fullName, String phone, String mail) {
        this.fullName = fullName;
        this.phone = phone;
        this.mail = mail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}
