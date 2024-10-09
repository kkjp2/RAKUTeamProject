package com.example.demo.repository;

import com.example.demo.entity.MoveCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoveCompanyRepository extends JpaRepository<MoveCompany, Integer> {
    //List<MoveCompany> findByMoveCity(String moveCity);  // 改为findByMoveCity以匹配字段名
    // 使用LIKE进行部分匹配查询
    @Query("SELECT m FROM MoveCompany m WHERE m.moveCity LIKE %:city%")
    List<MoveCompany> findByCityContaining(@Param("city") String city);
}

