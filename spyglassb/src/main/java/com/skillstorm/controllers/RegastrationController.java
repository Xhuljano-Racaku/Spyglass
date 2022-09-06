package com.skillstorm.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		
	// Register a user	
		@PostMapping
		public ResponseEntity<User> registerUser(@Valid @RequestBody User user) throws Exception {
			String tempEmail = user.getEmail();
			if(tempEmail != null && !"".equals(tempEmail)) {
				User userObj = service.getUserByEmail(tempEmail);
				if(userObj != null) {
					throw new Exception("User wwith" + tempEmail + "already exist");
				}
			}
			
			User userObj = null;
			userObj = service.save(user);
			System.out.println("POST called");
			return new ResponseEntity<>(userObj, HttpStatus.CREATED);
		}
		
	// Login user
		@PostMapping("/login")
		public ResponseEntity<User> loginUser(@RequestBody User user) throws Exception {
			String tempEmail = user.getEmail();
			String tempPass = user.getPassword();
			User userObj = null;
			if(tempEmail != null && tempPass != null) {
				userObj = service.getUserByEmailAndPassword(tempEmail, tempPass);
			}
			if(userObj == null) {
				throw new Exception("Bad credentials");
			}
			return new ResponseEntity<>(userObj, HttpStatus.CREATED);
		}
		
	// Delete a user
		// Delete a goal
		@DeleteMapping("/id/{id}")
		public ResponseEntity<Void> delete(@PathVariable int id) {
			System.out.println("DELETE called");
			service.delete(id);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
}
