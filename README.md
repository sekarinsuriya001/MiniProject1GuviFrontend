# Employee Management System (EMS)

The **Employee Management System (EMS)** is a full-stack web application built to streamline and manage employee data within an organization. It offers features such as creating, reading, updating, and deleting employee records (CRUD operations) via a secure and responsive interface.

---

## 🧰 Tech Stack

### 🔧 Backend
- Java
- Spring Boot
- Spring Data JPA
- Maven
- PostgreSQL

### 🎨 Frontend
- React
- Vite
- JavaScript
- Axios
- Bootstrap
- NPM

### 🧪 Tools
- IntelliJ IDEA (Backend)
- Visual Studio Code (Frontend)
- Postman (API Testing)

---

## 🏗️ Project Structure

### 📦 Backend

```
src/main/java/com/empdata/employeeManagement/
│
├── controller/
│   └── EmpManagementController.java
├── dto/
│   └── EmpManagementDto.java
├── entity/
│   └── EmpManagement.java
├── exception/
│   └── EmpNotFoundException.java
├── mapper/
│   └── EmpManagementMapper.java
├── repository/
│   └── EmpManagementRepository.java
├── service/
│   ├── EmpManagementService.java
│   └── EmpManagementServiceImpl.java
└── EmployeeManagementApplication.java
```

- Configuration: `application.properties`
- Build Tool: `pom.xml`

### 🌐 Frontend

```
src/
├── assets/
├── components/
│   ├── AddEmployee.jsx
│   ├── EmployeeList.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── UpdateEmployee.jsx
│   └── ViewEmployee.jsx
├── services/
│   └── EmployeeService.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── index.html
```

- Configuration: `.gitignore`, `eslint.config.js`, `vite.config.js`
- Package: `package.json`, `package-lock.json`

---

## 🔐 Database

**PostgreSQL Table: `employees`**

| Column     | Type   | Description                  |
|------------|--------|------------------------------|
| id         | long   | Employee unique identifier   |
| first_Name | String | First name of the employee   |
| last_Name  | String | Last name of the employee    |
| email      | String | Employee’s email address     |

---

## 📡 API Endpoints

| Method | Endpoint          | Description                        |
|--------|-------------------|------------------------------------|
| POST   | `/employees`      | Create a new employee              |
| GET    | `/employees`      | Retrieve all employees             |
| GET    | `/employees/{id}` | Retrieve an employee by ID         |
| PUT    | `/employees/{id}` | Update an employee by ID           |
| DELETE | `/employees/{id}` | Delete an employee by ID           |

---

## 🚀 How to Run

### 🛠️ Backend (Spring Boot)

1. Open the project in **IntelliJ IDEA**
2. Run `EmployeeManagementApplication.java`
3. Backend will start on: `http://localhost:8080`

### 🌐 Frontend (React)

1. Open the project in **Visual Studio Code**
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Frontend will start on: `http://localhost:3000`

---

## 📸 Screenshots

- Home Page
 <img width="975" height="445" alt="image" src="https://github.com/user-attachments/assets/e14de0fb-63ce-4888-bee8-267a3aa4e560" />
 
- Add Employee
 <img width="975" height="445" alt="image" src="https://github.com/user-attachments/assets/97b21d90-e214-44b2-997e-67949b0c37fb" />
  
- View Employee
 <img width="975" height="442" alt="image" src="https://github.com/user-attachments/assets/d518ef0a-5ca1-4d7d-9e45-b400dd735c7f" />

- Edit Employee
 <img width="975" height="439" alt="image" src="https://github.com/user-attachments/assets/e0e23668-eb59-4e06-ade2-43e10e335c30" />

- Delete Employee  
<img width="975" height="469" alt="image" src="https://github.com/user-attachments/assets/98808e16-529e-43d1-8c99-3232c3a8168e" />

> All actions are fully functional, and data is persistently stored in the PostgreSQL database.

---

## ✅ Features

- 🔄 CRUD operations for employee records
- ⚙️ RESTful API with Spring Boot
- 🎨 Responsive and dynamic React UI
- 🔒 Role-based access control (extendable)
- 🧩 Scalable, modular project structure
- 🗃️ PostgreSQL database integration

---

## 📌 Conclusion

The **Employee Management System** is a production-ready application tailored for modern HR needs. Built with a modular and scalable approach, EMS ensures ease of maintenance, extension, and deployment.

> This project is an excellent foundation for expanding into more complex systems, such as performance tracking, leave management, or attendance systems.

Backend Contents available in https://github.com/sekarinsuriya001/MiniProject1GuviBackend
