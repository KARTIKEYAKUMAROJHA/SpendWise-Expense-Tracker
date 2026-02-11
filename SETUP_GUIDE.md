# SpendWise Expense Tracker - Complete Setup Guide

## 📋 Requirements

### System Requirements
- Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- 4GB RAM minimum
- 2GB free disk space

### Software Requirements

#### Frontend
- Node.js 16.x or higher
- npm 7.x or higher (comes with Node.js)

#### Backend
- Java 17 (JDK)
- Maven 3.8.0 or higher

#### Database
- MySQL 8.0 or higher

## 🚀 Installation Steps

### Step 1: Install Required Software

#### Windows

**Node.js & npm**
1. Download from https://nodejs.org/
2. Download LTS version
3. Run installer with default settings
4. Verify: `node --version` and `npm --version`

**Java 17**
1. Download from https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
2. Run installer
3. Set JAVA_HOME environment variable
4. Verify: `java -version`

**Maven**
1. Download from https://maven.apache.org/download.cgi
2. Extract to a folder
3. Add to PATH environment variable
4. Verify: `mvn --version`

**MySQL**
1. Download from https://dev.mysql.com/downloads/mysql/
2. Run installer
3. Choose defaults during setup
4. Set root password to "root" (as per configuration)
5. Verify: `mysql --version`

### Step 2: Database Setup

```bash
# Open MySQL command line
mysql -u root -p
# Enter password: root

# Run the schema
source C:\Users\Kartikey\Desktop\SpendWiseExpenseTracker\database\schema.sql

# Verify
USE spendwise_db;
SHOW TABLES;
```

### Step 3: Backend Setup

```bash
cd C:\Users\Kartikey\Desktop\SpendWiseExpenseTracker\backend\spendwise-api

# Build the project
mvn clean package

# Run the application
mvn spring-boot:run

# Expected output: "Started SpendwiseApiApplication in X seconds"
```

Backend will run on: `http://localhost:8080`

### Step 4: Frontend Setup

```bash
cd C:\Users\Kartikey\Desktop\SpendWiseExpenseTracker\frontend\spendwise-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Expected output: "Local: http://localhost:3000"
```

Frontend will run on: `http://localhost:3000`

## 🔍 Verification Checklist

### Database ✓
- [ ] MySQL is running
- [ ] Database `spendwise_db` exists
- [ ] Tables `users` and `expenses` exist
- [ ] Can connect with user: root, password: root

### Backend ✓
- [ ] Terminal shows "Started SpendwiseApiApplication"
- [ ] No errors in console
- [ ] Can access `http://localhost:8080/api/health` (if health check is enabled)
- [ ] PORT 8080 is not in use

### Frontend ✓
- [ ] Terminal shows "Local: http://localhost:3000"
- [ ] No errors in console
- [ ] Browser opens application
- [ ] Can see login page
- [ ] PORT 3000 is not in use

## 🧪 Testing the Application

### 1. Create Account
1. Navigate to `http://localhost:3000`
2. Click "Sign up"
3. Enter:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
4. Click "Sign up"

### 2. Login
1. You should be redirected to Dashboard
2. Or go to Login page
3. Enter credentials
4. Click "Login"

### 3. Add Expense
1. Click "Add Expense" in sidebar
2. Fill in details:
   - Title: Grocery Shopping
   - Amount: 2500
   - Category: Food & Dining
   - Date: Today
   - Note: Weekly groceries
3. Click "Save Expense"

### 4. View Dashboard
1. Click "Dashboard" in sidebar
2. Should see:
   - Total Expenses card
   - This Month card
   - Categories card
   - Recent Expenses table

### 5. View Reports
1. Click "Reports" in sidebar
2. Should see:
   - Category-wise breakdown
   - Monthly summary

## 🔧 Troubleshooting

### MySQL Issues

**Error: "Access denied for user 'root'@'localhost'"**
```bash
# Reset MySQL password (Windows)
mysqld --skip-grant-tables
mysql -u root
```

**Error: "Can't connect to MySQL server"**
- Ensure MySQL service is running
- Windows: Services > Search for MySQL > Start
- Check port 3306 is available

### Backend Issues

**Error: "Port 8080 already in use"**
```bash
# Find process using port 8080
netstat -ano | findstr :8080
# Kill process
taskkill /PID <PID> /F
```

**Error: "Cannot find database"**
- Verify schema.sql was executed
- Check database name: `spendwise_db`
- Check credentials in application.properties

### Frontend Issues

**Error: "Port 3000 already in use"**
```bash
# Change port in vite.config.js
server: {
    port: 3001  // Change to different port
}
```

**Error: "Cannot connect to backend"**
- Check backend is running on port 8080
- Verify API URL in `src/services/api.js`
- Check CORS configuration in backend

**Blank page or errors in console**
- Clear browser cache: Ctrl+Shift+Delete
- Delete node_modules and reinstall: `npm install`
- Restart development server

## 📝 Environment Variables

### Frontend (.env.local - Optional)
```
VITE_API_BASE_URL=http://localhost:8080/api
```

### Backend (application.properties)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/spendwise_db
spring.datasource.username=root
spring.datasource.password=root
server.port=8080
jwt.secret=mySecretKeyForSpendWiseExpenseTrackerApplicationForJWTTokenGenerationAndValidation123456789
jwt.expiration=86400000
```

## 🔐 Security Notes

⚠️ **Important for Development Only**

These credentials are for development:
- Database User: `root`
- Database Password: `root`
- JWT Secret: Development key

For production deployment:
- Change database credentials
- Use strong JWT secret
- Enable HTTPS
- Use environment variables for secrets
- Enable firewall rules
- Use database backups

## 📦 Building for Production

### Frontend
```bash
cd frontend/spendwise-ui
npm run build
# Deploy dist/ folder to Vercel, Netlify, or your server
```

### Backend
```bash
cd backend/spendwise-api
mvn clean package
# Deploy target/spendwise-api-1.0.0.jar to your server
java -jar spendwise-api-1.0.0.jar
```

## 📚 Project Documentation

- **Frontend README**: `frontend/spendwise-ui/README.md`
- **Backend README**: `backend/spendwise-api/README.md`
- **Database README**: `database/README.md`
- **Main README**: `README.md`

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review console logs for error messages
3. Verify all prerequisites are installed
4. Check port availability
5. Ensure database is running
6. Try restarting services

## ✅ Next Steps

1. Complete all verification checklist items
2. Test the application thoroughly
3. Review code structure and customize as needed
4. Plan for deployment
5. Set up version control (Git)

---

**Project**: SpendWise Expense Tracker
**Version**: 1.0.0
**Created**: 2024
