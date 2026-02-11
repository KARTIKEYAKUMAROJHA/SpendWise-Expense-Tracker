# SpendWise Expense Tracker - Project Features & Tech Stack

## 🎯 Project Overview

**SpendWise** is a comprehensive, production-ready expense tracking application built with modern technologies. It provides users with a powerful platform to manage, track, and analyze their spending habits.

## ✨ Key Features

### 1. User Authentication & Security
- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ Secure password encryption (BCrypt)
- ✅ Automatic token refresh
- ✅ Protected routes and endpoints
- ✅ CORS support for secure cross-origin requests

### 2. Expense Management
- ✅ Create new expenses
- ✅ View all expenses with sorting
- ✅ Edit existing expenses
- ✅ Delete expenses with confirmation
- ✅ Categorize expenses (9 categories)
- ✅ Add notes to expenses
- ✅ Real-time validation

### 3. Dashboard & Analytics
- ✅ Total expense overview
- ✅ Monthly expense tracking
- ✅ Category count statistics
- ✅ Recent expenses display
- ✅ Interactive data visualization
- ✅ Real-time statistics calculation

### 4. Reports & Analytics
- ✅ Category-wise expense breakdown
- ✅ Visual progress bars
- ✅ Monthly spending summary
- ✅ Historical data tracking
- ✅ Expense trends
- ✅ Percentage calculations

### 5. User Interface
- ✅ Modern dark theme
- ✅ Green accent colors
- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Smooth animations
- ✅ Intuitive navigation
- ✅ Collapsible sidebar
- ✅ Professional styling with Tailwind CSS

## 🏗️ Architecture

### Frontend Architecture
```
Components Layer
├── Navbar (Navigation)
├── Sidebar (Menu)
├── ExpenseCard (Stats)
└── ExpenseTable (Data)

Pages Layer
├── Login (Auth)
├── Signup (Registration)
├── Dashboard (Overview)
├── AddExpense (Form)
└── Reports (Analytics)

Services Layer
├── api.js (Axios instance)
└── expenseService.js (API calls)
```

### Backend Architecture
```
Controller Layer
├── AuthController
├── ExpenseController
└── DashboardController

Service Layer
├── AuthService
└── ExpenseService

Repository Layer
├── UserRepository
└── ExpenseRepository

Entity Layer
├── User
└── Expense

Security Layer
├── JwtTokenProvider
└── JwtAuthenticationFilter

Config Layer
└── SecurityConfig
```

## 📊 Database Schema

### Users Table
```sql
- id: BIGINT PRIMARY KEY
- name: VARCHAR(255)
- email: VARCHAR(255) UNIQUE
- password: VARCHAR(255) ENCRYPTED
- created_at: TIMESTAMP
```

### Expenses Table
```sql
- id: BIGINT PRIMARY KEY
- title: VARCHAR(255)
- amount: DECIMAL(12, 2)
- category: VARCHAR(100)
- date: DATE
- note: TEXT
- user_id: BIGINT FOREIGN KEY
- created_at: TIMESTAMP
```

## 💻 Tech Stack Details

### Frontend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI Library |
| Vite | 5.0.0 | Build Tool & Dev Server |
| Tailwind CSS | 3.3.6 | Styling |
| Axios | 1.6.0 | HTTP Client |
| React Router | 6.20.0 | Routing |
| Lucide React | 0.294.0 | Icons |

**Browser Support**:
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions

### Backend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Java | 17 LTS | Language |
| Spring Boot | 3.2.0 | Framework |
| Spring Web | 3.2.0 | REST APIs |
| Spring Data JPA | 3.2.0 | ORM |
| Spring Security | 6.x | Authentication |
| jjwt | 0.12.3 | JWT |
| MySQL Driver | 8.0.33 | Database Driver |
| Lombok | 1.18.x | Code Generation |
| Maven | 3.8+ | Build Tool |

**Minimum Requirements**:
- Java 17 JDK
- Maven 3.8.0+

### Database Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| MySQL | 8.0+ | Database |
| InnoDB | - | Storage Engine |

## 🎨 Design System

### Color Palette
```css
Primary Background:   #0f0f0f (rgb(15, 15, 15))
Secondary Background: #1a1a1a (rgb(26, 26, 26))
Primary Text:         #e5e5e5 (rgb(229, 229, 229))
Accent Color:         #22c55e (rgb(34, 197, 94))
Error:                #ef4444 (rgb(239, 68, 68))
Success:              #22c55e (same as accent)
```

### Typography
- Font Family: System fonts (SF Pro Display, -apple-system, Segoe UI)
- Font Sizes: 12px - 48px
- Font Weights: 400 (normal), 600 (semibold), 700 (bold)
- Line Heights: 1.5x, 1.6x, 1.7x

### Spacing
- Base Unit: 4px (Tailwind)
- Padding: 4px - 64px
- Margin: 4px - 64px
- Border Radius: 4px - 12px

### Responsive Breakpoints
```
Mobile:     320px - 767px
Tablet:     768px - 1023px
Desktop:    1024px - 1279px
Large:      1280px+
```

## 🔐 Security Features

### Authentication
- JWT tokens (24-hour expiration)
- Token stored in localStorage
- Automatic token injection in requests
- Token validation on each request

### Authorization
- Protected routes on frontend
- Protected endpoints on backend
- User-based data isolation
- Role-based access control ready

### Data Security
- Password encryption with BCrypt
- SQL injection prevention
- XSS protection via React
- CSRF protection
- CORS configuration
- Secure cookie handling

### API Security
- HTTPS ready
- Bearer token authentication
- Request validation
- Error handling without data leaks

## 📈 Performance Optimizations

### Frontend
- Vite for fast HMR (Hot Module Replacement)
- Code splitting via React Router
- Lazy loading ready
- Optimized images
- CSS minification
- JavaScript minification

### Backend
- Database indexing on frequently queried columns
- Connection pooling
- Response compression
- Stateless design
- Efficient JPA queries

### Database
- Indexes on user_id, date, email
- Foreign key constraints
- Query optimization
- Transaction management

## 🚀 Deployment Ready

### Frontend
- ✅ Ready for Vercel, Netlify, AWS S3
- ✅ Environment variables support
- ✅ Production build optimization
- ✅ HTTPS compatible

### Backend
- ✅ Docker ready
- ✅ AWS EC2, RDS compatible
- ✅ Azure App Service ready
- ✅ Kubernetes deployment ready
- ✅ CI/CD pipeline ready

### Database
- ✅ Cloud database compatible (AWS RDS, Azure)
- ✅ Backup and restore ready
- ✅ Scaling ready

## 📊 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Authentication Endpoints
```
POST /auth/signup      - Register user
POST /auth/login       - Login user
```

### Expense Endpoints
```
GET    /expenses       - Get all expenses
GET    /expenses/{id}  - Get expense
POST   /expenses       - Create expense
PUT    /expenses/{id}  - Update expense
DELETE /expenses/{id}  - Delete expense
```

### Dashboard Endpoints
```
GET /dashboard/stats                - Get statistics
GET /dashboard/category-wise-total  - Category breakdown
GET /dashboard/monthly-summary      - Monthly totals
```

## 📊 Database Indexes

```sql
-- User lookups
CREATE INDEX idx_email ON users(email)

-- Expense queries
CREATE INDEX idx_user_id ON expenses(user_id)
CREATE INDEX idx_user_date ON expenses(user_id, date)
CREATE INDEX idx_category ON expenses(category)
```

## 🔄 Data Flow

### User Registration
1. User fills signup form
2. Frontend validates input
3. POST to /auth/signup
4. Backend validates & encrypts password
5. User saved to database
6. JWT token generated
7. Token stored in localStorage
8. Redirect to dashboard

### Add Expense
1. User fills expense form
2. Frontend validates input
3. POST to /expenses with JWT
4. Backend validates authorization
5. Expense saved to database
6. Response with expense data
7. Frontend updates list
8. Success notification

### View Reports
1. User clicks Reports
2. Frontend fetches categories and summary
3. Backend queries database
4. Calculates aggregations
5. Returns formatted data
6. Frontend renders visualizations

## 🧪 Testing Scenarios

### Authentication
- [ ] Signup with valid data
- [ ] Signup with existing email
- [ ] Login with valid credentials
- [ ] Login with invalid password
- [ ] Access protected routes without token

### Expenses
- [ ] Create expense with all fields
- [ ] Create expense without note
- [ ] Update expense
- [ ] Delete expense
- [ ] View other user's expenses (should fail)

### Dashboard
- [ ] Total expenses calculation
- [ ] Monthly expenses filtering
- [ ] Categories counting
- [ ] Recent expenses ordering

### Reports
- [ ] Category breakdown calculation
- [ ] Monthly summary grouping
- [ ] Empty state handling
- [ ] Large dataset performance

## 📝 Code Quality

### Frontend
- ✅ ES6+ JavaScript
- ✅ React best practices
- ✅ Component composition
- ✅ Prop validation ready
- ✅ Error boundaries ready

### Backend
- ✅ Java 17 features
- ✅ Spring best practices
- ✅ SOLID principles
- ✅ Clean code architecture
- ✅ Proper exception handling

## 🎓 Learning Resources

This project demonstrates:
- Full-stack web development
- REST API design
- JWT authentication
- Database design
- Responsive UI design
- React component patterns
- Spring Boot best practices
- Security best practices

---

**Project Status**: Production Ready
**Last Updated**: 2024
**Version**: 1.0.0
