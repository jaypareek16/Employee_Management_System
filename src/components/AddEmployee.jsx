import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AddEmployeefunc, UpdateEmployeefunc } from '../EmployeeService/EmployeeService';

const AddEmployee = () => {
  const { emp_id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (emp_id) {
      (async () => {
        try {
          const data = await UpdateEmployeefunc(emp_id);
          setEmployee(data);
        } catch (err) {
          console.error('Error fetching employee:', err);
        }
      })();
    }
  }, [emp_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (emp_id) {
        await UpdateEmployeefunc(emp_id, employee);
      } else {
        await AddEmployeefunc(employee);
      }
      navigate('/employee');
    } catch (err) {
      console.error('Error saving employee:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{emp_id ? 'Update Employee' : 'Add Employee'}</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={employee.firstName}
            onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={employee.lastName}
            onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            required
          />
        </div>
        <button type="submit" 
        className="btn btn-success mt-3"
        style={{marginBottom:`300px`}}>
          {emp_id ? 'Update' : 'Add'}
        </button>
        <button
          type="button"
          className="btn btn-secondary mt-3 ml-2"
          onClick={() => navigate('/employee')}
          style={{marginLeft:`10px`,marginBottom:`300px`}}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
