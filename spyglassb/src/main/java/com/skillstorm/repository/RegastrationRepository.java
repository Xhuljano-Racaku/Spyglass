package com.skillstorm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skillstorm.beans.User;

public interface RegastrationRepository extends JpaRepository<User, Integer> {
	
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email, String password);
}
