package com.example.demo.repository;

import com.example.demo.entity.MoveCompany;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MoveCompanyRepository extends JpaRepository<MoveCompany, Integer> {
    @Query("SELECT m FROM MoveCompany m WHERE m.moveCity LIKE %:city%")
    Page<MoveCompany> findByCityContaining(@Param("city") String city, Pageable pageable);

    public Optional<MoveCompany> findByBusinessNumber(String businessNumber);

}


