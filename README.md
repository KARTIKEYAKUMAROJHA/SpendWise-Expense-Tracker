# 💰 SpendWise Expense Tracker

Full Stack Personal Finance Management Application

## 🚀 Tech Stack
Frontend: React (Vite) + Tailwind CSS
Backend: Spring Boot 3 + Java 17
Database: MySQL
Authentication: JWT
API Communication: Axios

## 🔐 Features
- User Signup & Login (JWT Authentication)
- Add / Edit / Delete Expenses
- Category-wise Tracking
- Monthly Expense Summary
- Dashboard Analytics
- Responsive UI (Black + Gray Theme with Green Accent)

## 📊 APIs
POST /api/auth/signup
POST /api/auth/login
GET /api/expenses
POST /api/expenses
PUT /api/expenses/{id}
DELETE /api/expenses/{id}
GET /api/dashboard/summary
GET /api/dashboard/category-report

## 🛠 How to Run

Backend:
mvn spring-boot:run

Frontend:
npm install
npm run dev