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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCeo() {
        return ceo;
    }

    public void setCeo(String ceo) {
        this.ceo = ceo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDetailedAddress() {
        return detailedAddress;
    }

    public void setDetailedAddress(String detailedAddress) {
        this.detailedAddress = detailedAddress;
    }

    public String getBusinessNumber() {
        return businessNumber;
    }

    public void setBusinessNumber(String businessNumber) {
        this.businessNumber = businessNumber;
    }

    public String getImg_icon() {
        return img_icon;
    }

    public void setImg_icon(String img_icon) {
        this.img_icon = img_icon;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getMoveCity() {
        return moveCity;
    }

    public void setMoveCity(String moveCity) {
        this.moveCity = moveCity;
    }
    //    // 添加数据库列映射
//    @Column(name = "external_id")
//    private String externalId;

}
