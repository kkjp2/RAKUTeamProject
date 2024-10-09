package com.example.demo.service;

import com.example.demo.repository.MoveCompanyRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MoveCompanyServiceTest {
    @Autowired
    private MoveCompanyService moveCompanyService;

    @Autowired
    private MoveCompanyRepository moveCompanyRepository;

    @Test
    void testDeleteCompany() {
        moveCompanyService.deleteCompany(2);
    }
}
