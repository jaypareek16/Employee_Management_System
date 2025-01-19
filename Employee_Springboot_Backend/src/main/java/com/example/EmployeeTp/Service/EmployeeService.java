package com.example.EmployeeTp.Service;

import com.example.EmployeeTp.CustomExceptions.RessoucesNotFoundException;
import com.example.EmployeeTp.Entity.Employee;
import com.example.EmployeeTp.Repo.EmployeeRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRep employeeRep;

    public Employee addEmployee(Employee employee) {
        // Example validation: Ensure all required fields are present
        if (employee.getFirstName() == null || employee.getLastName() == null || employee.getEmail() == null) {
            throw new IllegalArgumentException("Employee details are incomplete");
        }
        return employeeRep.save(employee);
    }

    public Employee getEmployeeById(long employeeId) {
        return employeeRep.findById(employeeId)
                .orElseThrow(() -> new RessoucesNotFoundException("Employee with the given id: " + employeeId + " does not exist"));
    }

    public Employee UpdateEmployee(long employeeId, Employee updatedEmployee) {
        Employee emp = employeeRep.findById(employeeId)
                .orElseThrow(() -> new RessoucesNotFoundException("Employee with given id does not exist"));

        emp.setFirstName(updatedEmployee.getFirstName());
        emp.setLastName(updatedEmployee.getLastName());
        emp.setEmail(updatedEmployee.getEmail());

        return employeeRep.save(emp); // This will update the employee
    }

    public List<Employee> getAllEmployee() {
        return employeeRep.findAll();
    }

    public Employee deleteEmployee(long empId) {
        Employee emp = employeeRep.findById(empId)
                .orElseThrow(() -> new RessoucesNotFoundException("Employee with given id does not exist"));
        employeeRep.delete(emp);
        return emp;
    }
}
