import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService'; // Importing EmployeeService
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {
    const { id } = useParams(); // Get the employee ID from the URL parameters
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const response = await EmployeeService.getEmployeeById(id);
            const employee = response.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
        } catch (error) {
            console.error("Error fetching employee:", error);
            alert("There was an error fetching the employee details. Please try again.");
            navigate('/employees'); // Redirect to employee list on error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const updatedEmployee = { firstName, lastName, email };

        try {
            await EmployeeService.updateEmployee(id, updatedEmployee); // Call the service to update the employee
            navigate('/employees'); // Redirect to the employee list after successful update
        } catch (error) {
            console.error("Error updating employee:", error);
            alert("There was an error updating the employee. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Employee</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;