package com.barbershop.ru.project.services;

import com.barbershop.ru.project.models.Appointment;
import com.barbershop.ru.project.repositories.AppointmentRepository;
import jakarta.transaction.Transactional;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @Transactional
    public List<Appointment> findAll() {
        return appointmentRepository.findAll();
    }

    @Transactional
    public Appointment findOne(int id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    @Transactional
    public void save(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    @Transactional
    public void delete(int id) {
        appointmentRepository.deleteById(id);
    }

    @Transactional
    public void update(int id, Appointment updatedAppointment) {
        updatedAppointment.setId(id);
        appointmentRepository.save(updatedAppointment);
    }
}
