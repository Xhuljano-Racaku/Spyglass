package com.skillstorm.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name= "users")
public class User {
	@Id
	@Column(name= "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	@Column(name= "email")
	private String email;
	
	@Column(name= "user_name")
	private String userName;
	
	@Column(name= "password")
	private String password;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private Set<Goal> goals;

	public User() {
		super();
	}

//	public User(String email, String userName, String password) {
//	super();
//	this.email = email;
//	this.userName = userName;
//	this.password = password;
//}
//	
//	public User(int userId, String email, String userName, String password) {
//		super();
//		this.userId = userId;
//		this.email = email;
//		this.userName = userName;
//		this.password = password;
//	}

	public User(String email, String userName, String password, Set<Goal> goals) {
		super();
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.goals = goals;
	}

	public User(int userId, String email, String userName, String password, Set<Goal> goals) {
		super();
		this.userId = userId;
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.goals = goals;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Goal> getGoals() {
		return goals;
	}

	public void setGoals(Set<Goal> goals) {
		this.goals = goals;
	}

	@Override
//	public String toString() {
//		return "User [userId=" + userId + ", email=" + email + ", userName=" + userName + ", password=" + password
//				+ "]";
//	}
	
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", userName=" + userName + ", password=" + password
				+ ", goals=" + goals + "]";
	}
	
}
