package com.example.EmployeeTp.Controller;

import com.example.EmployeeTp.Entity.Employee;
import com.example.EmployeeTp.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:3000"})
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping
    public ResponseEntity<Employee> addEmp(@RequestBody Employee employee) {
        service.addEmployee(employee);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long Employee_id) {
        Employee emp = service.getEmployeeById(Employee_id);
        return new ResponseEntity<>(emp, HttpStatus.OK);  // Updated to HTTP 200
    }

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") long Employee_id, @RequestBody Employee emp) {
        Employee ed = service.UpdateEmployee(Employee_id, emp);
        return new ResponseEntity<>(emp, HttpStatus.OK);  // Updated to HTTP 200
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> emp_list = service.getAllEmployee();
        return new ResponseEntity<>(emp_list, HttpStatus.OK);  // Updated to HTTP 200
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable("id") long emp_id) {
        Employee emp = service.deleteEmployee(emp_id);
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }
}
