import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import './index.css'; // Importing global styles

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="container">
                    <Routes>
                        {/* Route for listing employees */}
                        <Route path="/employees" element={<EmployeeList />} />

                        {/* Route for adding a new employee */}
                        <Route path="/add-employee" element={<AddEmployee />} />

                        {/* Route for viewing an employee */}
                        <Route path="/view-employee/:id" element={<ViewEmployee />} />

                        {/* Route for updating an employee */}
                        <Route path="/update-employee/:id" element={<UpdateEmployee />} />

                        {/* Default route */}
                        <Route path="/" element={<EmployeeList />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;