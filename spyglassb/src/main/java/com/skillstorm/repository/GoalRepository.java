package com.skillstorm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.beans.Goal;

public interface GoalRepository extends JpaRepository<Goal, Integer> {
	
	List<Goal> findByName(String name);


}
