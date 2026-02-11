# SpendWise Expense Tracker - Backend API

A production-ready Spring Boot 3 backend API for the SpendWise Expense Tracker application.

## Features

- 🔐 JWT Authentication & Authorization
- 💰 Complete Expense Management
- 📊 Dashboard Statistics
- 📈 Reports & Analytics
- 🔄 CORS Configuration
- 🛡️ Spring Security

## Prerequisites

- Java 17 or higher
- Maven 3.8.0 or higher
- MySQL 8.0 or higher

## Setup Instructions

### 1. Database Setup

```bash
mysql -u root -p
```

```sql
CREATE DATABASE spendwise_db;
USE spendwise_db;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    note TEXT,
    user_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_date ON expenses(user_id, date);
```

### 2. Configuration

Update `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/spendwise_db
spring.datasource.username=root
spring.datasource.password=root

jwt.secret=your-secret-key-here
jwt.expiration=86400000
```

### 3. Build & Run

```bash
cd backend/spendwise-api

# Build the project
mvn clean package

# Run the application
mvn spring-boot:run
```

The API will be available at: `http://localhost:8080`

## API Endpoints

### Authentication

```
POST /api/auth/signup      - Register new user
POST /api/auth/login       - Login user
```

### Expenses

```
GET    /api/expenses       - Get all expenses
GET    /api/expenses/{id}  - Get expense by ID
POST   /api/expenses       - Create new expense
PUT    /api/expenses/{id}  - Update expense
DELETE /api/expenses/{id}  - Delete expense
```

### Dashboard

```
GET /api/dashboard/stats              - Get dashboard statistics
GET /api/dashboard/category-wise-total - Get category-wise totals
GET /api/dashboard/monthly-summary    - Get monthly summary
```

## Security

- JWT Token based authentication
- Password encryption using BCrypt
- CORS enabled for frontend communication
- Role-based access control

## Tech Stack

- Spring Boot 3.2.0
- Spring Data JPA
- Spring Security 6
- JWT (jjwt)
- MySQL
- Lombok
- Maven

## License

MIT
