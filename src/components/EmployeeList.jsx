import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService'; 
import { Link } from 'react-router-dom';
import "./style.css";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await EmployeeService.getAllEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const deleteEmployee = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                await EmployeeService.deleteEmployee(id);
                fetchEmployees(); // Refresh the employee list after deletion
            } catch (error) {
                console.error("Error deleting employee:", error);
            }
        }
    };

    return (
        <div className="container">
            <h2>Employee List</h2>
            <div className="button-container mb-3">
                <Link to="/add-employee" className="btn btn-view">Add Employee</Link>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Link to={`/view-employee/${employee.id}`} className="btn btn-view me-2">View</Link>
                                    <Link to={`/update-employee/${employee.id}`} className="btn btn-edit me-2">Edit</Link>
                                    <button onClick={() => deleteEmployee(employee.id)} className="btn btn-delete">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;