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
}
