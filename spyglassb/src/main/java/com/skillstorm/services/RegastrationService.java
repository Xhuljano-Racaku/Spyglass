package com.skillstorm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.beans.User;
import com.skillstorm.repository.RegastrationRepository;

@Service
@Transactional
public class RegastrationService {
	
	@Autowired
	private RegastrationRepository repository;
	
	// Find all users
		public List<User> findAll() {
			return repository.findAll();
		}
		
	// Save a user
		public User save(User user) {
			return repository.save(user);
		}
		
	// Get user by email and check if that email is registered already
		public User getUserByEmail(String email) {
			return repository.findByEmail(email);
		}
		
	//  Get user by email and password and check if email and password creds matches the ones in database
		public User getUserByEmailAndPassword(String email, String password) {
			return repository.findByEmailAndPassword(email, password);
		}
		
	// Delete a user
		// Delete a goal
		public void delete(int id) {
			 repository.deleteById(id);
		}
}
