package com.skillstorm.beans;

import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name= "goals")
public class Goal {
	@Id
	@Column(name= "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name= "name")
	private String name;
	
	@Column(name= "description")
	private String description;
	
	@Column(name= "image")
	private String image;
	
	@Column(name= "target_date")
	private LocalDate targetDate;
	
	@Column(name= "target_amount")
	private double targetAmount;
	
	@Column(name= "saved_amount")
	private double savedAmount;
	
	@ManyToOne
//	@JsonIgnore
	@JoinColumn(name = "user_id")
	private User user;

	public Goal() {
		
	}
	
	public Goal(String name, String description, String image, LocalDate targetDate, double targetAmount,
			double savedAmount, User user) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.targetDate = targetDate;
		this.targetAmount = targetAmount;
		this.savedAmount = savedAmount;
		this.user = user;
	}

	public Goal(int id, String name, String description, String image, LocalDate targetDate, double targetAmount,
			double savedAmount, User user) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.image = image;
		this.targetDate = targetDate;
		this.targetAmount = targetAmount;
		this.savedAmount = savedAmount;
		this.user = user;
	}
	
//	public Goal(String name, String description, String image, LocalDate targetDate, double targetAmount,
//			double savedAmount) {
//		this.name = name;
//		this.description = description;
//		this.image = image;
//		this.targetDate = targetDate;
//		this.targetAmount = targetAmount;
//		this.savedAmount = savedAmount;
//	}
//
//	public Goal(int id, String name, String description, String image, LocalDate targetDate, double targetAmount,
//			double savedAmount) {
//		this.id = id;
//		this.name = name;
//		this.description = description;
//		this.image = image;
//		this.targetDate = targetDate;
//		this.targetAmount = targetAmount;
//		this.savedAmount = savedAmount;
//	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public LocalDate getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(LocalDate targetDate) {
		this.targetDate = targetDate;
	}

	public double getTargetAmount() {
		return targetAmount;
	}

	public void setTargetAmount(double targetAmount) {
		this.targetAmount = targetAmount;
	}

	public double getSavedAmount() {
		return savedAmount;
	}

	public void setSavedAmount(double savedAmount) {
		this.savedAmount = savedAmount;
	}
	
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
//	public String toString() {
//		return "Goal [id=" + id + ", name=" + name + ", description=" + description + ", image=" + image
//				+ ", targetDate=" + targetDate + ", targetAmount=" + targetAmount + ", savedAmount=" + savedAmount
//				+ "]";
//	}
//	
	public String toString() {
		return "Goal [id=" + id + ", name=" + name + ", description=" + description + ", image=" + image
				+ ", targetDate=" + targetDate + ", targetAmount=" + targetAmount + ", savedAmount=" + savedAmount
				+ ", user=" + user + "]";
	}
}
