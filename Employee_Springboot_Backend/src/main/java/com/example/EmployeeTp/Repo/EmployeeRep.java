package com.example.EmployeeTp.Repo;

import com.example.EmployeeTp.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRep extends JpaRepository<Employee,Long> {

}
