package com.skillstorm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.beans.User;
import com.skillstorm.services.RegastrationService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:4200")
public class RegastrationController {
	
	@Autowired
	private RegastrationService service;
	
	// Find all users
		@GetMapping
		public ResponseEntity<List<User>> findAll() {
			System.out.println("GET all called");
			return new ResponseEntity<List<User>>(service.findAll(), HttpStatus.OK);
		}
}
