package com.example.demo.repository;

import com.example.demo.entity.MoveReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<MoveReview, Long> {
    @Query("SELECT r FROM MoveReview r JOIN FETCH r.company c WHERE r.reviewId = :reviewId")
    Optional<MoveReview> findReviewWithCompanyName(@Param("reviewId") Long reviewId);
}


