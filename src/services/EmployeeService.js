import axios from 'axios';

const REST_BASE_API_URL = 'https://miniproject1guvi.onrender.com/api/employees'; 

class EmployeeService {
    
    // Fetch all employees
    static async getAllEmployees() {
        return await axios.get(REST_BASE_API_URL);
    }

    // Fetch an employee by ID
    static async getEmployeeById(id) {
        return await axios.get(`${REST_BASE_API_URL}/${id}`);
    }

    // Add a new employee
    static async addEmployee(employeeData) {
        return await axios.post(REST_BASE_API_URL, employeeData);
    }

    // Update an existing employee
    static async updateEmployee(id, employeeData) {
        return await axios.put(`${REST_BASE_API_URL}/${id}`, employeeData); 
    }

    // Delete an employee
    static async deleteEmployee(id) {
        return await axios.delete(`${REST_BASE_API_URL}/${id}`); 
    }
}

export default EmployeeService;