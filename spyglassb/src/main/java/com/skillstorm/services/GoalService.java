package com.skillstorm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.beans.Goal;
import com.skillstorm.repository.GoalRepository;

@Service
@Transactional
public class GoalService {
	
	@Autowired
	private GoalRepository repository;
	
	// Find all goals
	public List<Goal> findAll() {
		return repository.findAll();
	}
	
	// Find by name
	public List<Goal> findByName(String name) {
		return repository.findByName(name);
	}
	
	// Find by id
	public Goal findById(int id) {
		return repository.findById(id).get();
	}
	
	// Create a goal
	public Goal save(Goal goal) {
		return repository.save(goal);
	}
	
	// Update a goal
	public Goal update(Goal goal) {
		return repository.save(goal);
	}
	
	// Delete a goal
	public void delete(int id) {
		 repository.deleteById(id);
	}
}
