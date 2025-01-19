import React, { useEffect, useState } from 'react';
import { DeleteEmployeefunc, listEmployee } from '../EmployeeService/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponents() {
  const [employees, setEmployees] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  
  useEffect(() => {
    fetchEmployees();
  }, []);

  
  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await listEmployee(); 
      setEmployees(response); 
    } catch (err) {
      setError(`Failed to load employees: ${err.message}`); 
    } finally {
      setLoading(false); 
    }
  };

  
  const handleAddEmployee = () => {
    navigate("/AddEmployee");
  };

  
  const UpdateEmployee = (id) => {
    navigate(`/Update-emp/${id}`);
  };

  const DeleteEmployee = (id) =>{
    
    DeleteEmployeefunc(id).then((response)=>{
      fetchEmployees();
    }).catch(error=>{
      console.error(error);
    });
    navigate(`/employee`)
  }


  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <div className="mb-3">
        <button type="button" className="btn btn-primary" onClick={handleAddEmployee}>
          Add Employee
        </button>
      </div>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      {!error && employees.length === 0 && <p>No employees found.</p>}
      
      {employees.length > 0 && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.emp_id}>
                <td>{employee.emp_id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => UpdateEmployee(employee.emp_id)}
                  >
                    Update
                  </button>
                  <button 
                  className="btn btn-danger"
                  onClick={()=> DeleteEmployee(employee.emp_id)}
                  style={{marginLeft:`20px`}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListEmployeeComponents;
