package com.barbershop.ru.project.repositories;

import com.barbershop.ru.project.models.Barbershop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarbershopRepository extends JpaRepository<Barbershop, Integer> {
}
