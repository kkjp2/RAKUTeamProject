package com.example.demo.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "move_reviews")
public class MoveReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "move_review_id")
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "move_company_id", referencedColumnName = "move_company_id")
    private MoveCompany company;

    @Column(name = "move_service_rating")
    private Long rating;

    @Column(name = "move_price")
    private String price;

    @Column(name = "moving_region")
    private String region;//이사 지역...

    @Column(name = "move_service_date")
    private LocalDate serviceDate;

    @Column(name = "move_review_comment")
    private String comment;

    @Column(name = "move_review_created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public MoveCompany getCompany() {
        return company;
    }

    public void setCompany(MoveCompany company) {
        this.company = company;
    }

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public LocalDate getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(LocalDate serviceDate) {
        this.serviceDate = serviceDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
