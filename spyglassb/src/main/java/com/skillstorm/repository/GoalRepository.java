package com.skillstorm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Integer> {
	
	List<Goal> findByName(String name);
	
	@Query("SELECT g FROM Goal g JOIN g.user u WHERE u.userId = ?1")
	public List<Goal> findGoalByUserId(int id);
}
