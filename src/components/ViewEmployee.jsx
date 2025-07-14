import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService'; 
import { useParams, useNavigate } from 'react-router-dom';

const ViewEmployee = () => {
    const { id } = useParams(); // Get the employee ID from the URL parameters
    const [employee, setEmployee] = useState(null);
    const navigate = useNavigate(); // Hook for programmatic navigation

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employee:", error);
            alert("There was an error fetching the employee details. Please try again.");
            navigate('/employees'); // Redirect to employee list on error
        }
    };

    if (!employee) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <div className="container">
            <h2>Employee Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">ID: {employee.id}</h5>
                    <p className="card-text"><strong>First Name:</strong> {employee.firstName}</p>
                    <p className="card-text"><strong>Last Name:</strong> {employee.lastName}</p>
                    <p className="card-text"><strong>Email:</strong> {employee.email}</p>
                    <button className="btn btn-primary" onClick={() => navigate('/employees')}>Back to Employee List</button>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployee;