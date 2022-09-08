package com.skillstorm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.Goal;
import com.skillstorm.beans.User;

@Repository
public interface RegastrationRepository extends JpaRepository<User, Integer> {
	
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email, String password);
	
}
