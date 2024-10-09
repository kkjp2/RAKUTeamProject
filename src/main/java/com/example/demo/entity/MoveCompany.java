package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "company_information")  // 确保表名正确
public class MoveCompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "move_company_id")
    private Integer id;

    @Column(name = "move_company_name")
    private String name;

    @Column(name = "move_companyCEO")
    private String ceo;

    @Column(name = "move_company_phone")
    private String phone;

    @Column(name = "move_company_email")
    private String email;

    @Column(name = "move_company_postal_code")
    private String postalCode;

    @Column(name = "move_company_address")
    private String address;

    @Column(name = "move_detailed_address")
    private String detailedAddress;

    @Column(name = "move_business_number")
    private String businessNumber;

    @Column(name = "move_image_icon")
    private String img_icon;

    @Column(name = "move_service")
    private String service;

    @Column(name = "move_city")
    private String moveCity;

//    // 添加数据库列映射
//    @Column(name = "external_id")
//    private String externalId;

}
