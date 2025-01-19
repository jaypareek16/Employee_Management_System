package com.example.EmployeeTp;

import com.example.EmployeeTp.Entity.Employee;
import com.example.EmployeeTp.Service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication(scanBasePackages = "com.example.EmployeeTp")
public class EmployeeTpApplication {

	public static void main(String[] args) {
	 SpringApplication.run(EmployeeTpApplication.class, args);


	}

}
