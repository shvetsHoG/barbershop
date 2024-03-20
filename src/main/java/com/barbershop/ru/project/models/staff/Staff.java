package com.barbershop.ru.project.models.staff;

import com.barbershop.ru.project.models.Appointment;
import com.barbershop.ru.project.models.Barbershop;
import jakarta.persistence.*;


import java.util.List;

@Entity
@Table(name = "Staff")
public class Staff {

    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "barbershop_id", referencedColumnName = "id")
    private Barbershop barbershop;

    @Column(name = "fullname")
    private String fullname;

    @Column(name = "position")
    @Enumerated(EnumType.ORDINAL)
    private Position position;

    @Column(name = "phone")
    private String phone;

    @Column(name = "mail")
    private String mail;

    @OneToMany(mappedBy = "staff")
    private List<Appointment> appointments;

    public Staff() {
    }

    public Staff(Barbershop barbershop, String fullname, Position position, String phone, String mail) {
        this.barbershop = barbershop;
        this.fullname = fullname;
        this.position = position;
        this.phone = phone;
        this.mail = mail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Barbershop getBarbershop() {
        return barbershop;
    }

    public void setBarbershop(Barbershop barbershop) {
        this.barbershop = barbershop;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
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
