package com.barbershop.ru.project.models;

import com.barbershop.ru.project.models.staff.Staff;
import jakarta.persistence.*;

@Entity
@Table(name = "Appointment")
public class Appointment {

    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "staff_id", referencedColumnName = "id")
    private Staff staff;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Client client;

    @Column(name = "full_name_client")
    private String fullNameClient;

    @Column(name = "phone")
    private String phone;

    @Column(name = "service_id")
    private int serviceId;

    @Column(name = "data")
    private String data;

    public Appointment() {

    }

    public Appointment(Staff staff, Client client, String fullNameClient, String phone, int serviceId, String data) {
        this.staff = staff;
        this.client = client;
        this.fullNameClient = fullNameClient;
        this.phone = phone;
        this.serviceId = serviceId;
        this.data = data;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public String getFullNameClient() {
        return fullNameClient;
    }

    public void setFullNameClient(String fullNameClient) {
        this.fullNameClient = fullNameClient;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
