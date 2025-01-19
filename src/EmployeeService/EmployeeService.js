import axios from "axios";

const Rest_Api_base_url = "http://localhost:8080/api/employee";


export const listEmployee = async () => {
  const response = await axios.get(Rest_Api_base_url);
  return response.data;
};


export const AddEmployeefunc = async (employee) => {
  const response = await axios.post(Rest_Api_base_url, employee);
  return response.data;
};


export const UpdateEmployeefunc = async (emp_id, updatedData) => {
  const response = await axios.put(`${Rest_Api_base_url}/${emp_id}`, updatedData);
  return response.data;
};

export const DeleteEmployeefunc = async(emp_id) => {
  const response = await axios.delete(`${Rest_Api_base_url}/${emp_id}`);
  return response.data;
}
