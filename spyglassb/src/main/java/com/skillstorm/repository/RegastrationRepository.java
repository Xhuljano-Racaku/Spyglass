package com.skillstorm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skillstorm.beans.User;

public interface RegastrationRepository extends JpaRepository<User, Integer> {

}
