package com.skillstorm.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.skillstorm.beans.Goal;
import com.skillstorm.services.GoalService;

@RestController
@RequestMapping("/goals")
@CrossOrigin(origins="http://localhost:4200")
public class GoalController {
	
	@Autowired
	private GoalService service;
	
	// Find all goals
	@GetMapping
	public ResponseEntity<List<Goal>> findAll() {
		System.out.println("GET all called");
		return new ResponseEntity<List<Goal>>(service.findAll(), HttpStatus.OK);
	}
	
	// Find all goals with sorting
	@GetMapping("/{field}")
	public ResponseEntity<List<Goal>> findAllWithSorting(@PathVariable String field) {
		System.out.println("GET all with sorting called");
		return new ResponseEntity<List<Goal>>(service.findAllWithSorting(field), HttpStatus.OK);
	}
	
	// Find all goals with paginantion
	@GetMapping("/pagination")
	public ResponseEntity<Page<Goal>> findAllWithPaginantion(@RequestParam int page, @RequestParam int size) {
		System.out.println("GET all with paginantion called");
		return new ResponseEntity<Page<Goal>>(service.findAllWithPaginantion(page, size), HttpStatus.OK);
	}
	
	// Find all goals with paginantion and sorting
	@GetMapping("/paginationandsort/{offset}/{pageSize}/{field}")
	public ResponseEntity<Page<Goal>> findAllWithPaginantionAndSorting(@PathVariable int offset,@PathVariable int pageSize, @PathVariable String field) {
		System.out.println("GET all with paginantion called");
		return new ResponseEntity<Page<Goal>>(service.findAllWithPaginantionAndSorting(offset,pageSize, field), HttpStatus.OK);
	}
	
	// Find by id
	@GetMapping("/id/{id}")
	public ResponseEntity<Goal> findById(@PathVariable int id) {
		System.out.println("GET by id called");
		return new ResponseEntity<Goal> (service.findById(id), HttpStatus.OK);
	}
	
	// Find by name
	@GetMapping("/name/{name}")
	public ResponseEntity<List<Goal>> findByName(@PathVariable String name) {
		System.out.println("GET by name called");
		return new ResponseEntity<List<Goal>>(service.findByName(name), HttpStatus.OK);
	}
	
	// Create a goal
	@PostMapping
	public ResponseEntity<Goal> save(@Valid @RequestBody Goal goal) {
		System.out.println("POST called");
		return new ResponseEntity<>(service.save(goal), HttpStatus.CREATED);
	}
	
	// Update a goal
	@PutMapping
	public ResponseEntity<Goal> update(@Valid @RequestBody Goal goal) {
		System.out.println("UPDATE called");
		return new ResponseEntity<>(service.update(goal), HttpStatus.CREATED);
	}
	
	// Delete a goal
	@DeleteMapping("/id/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		System.out.println("DELETE called");
		service.delete(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
