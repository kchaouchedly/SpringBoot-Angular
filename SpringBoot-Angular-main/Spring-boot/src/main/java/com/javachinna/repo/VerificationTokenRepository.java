package com.javachinna.repo;

import com.javachinna.model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import com.javachinna.model.User;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

	VerificationToken findByToken(String token);

	VerificationToken findByUser(User user);
}
