# SpendWise Expense Tracker - Directory Structure & File Guide

## 📁 Complete Project Structure

```
SpendWiseExpenseTracker/
│
├── 📄 README.md                    # Main project documentation
├── 📄 SETUP_GUIDE.md              # Detailed setup instructions
├── 📄 FEATURES_TECH_STACK.md      # Features and tech stack details
├── 🔧 start.bat                   # Windows quick start script
├── 🔧 start.sh                    # macOS/Linux quick start script
│
├── 📂 frontend/
│   └── 📂 spendwise-ui/           # React + Vite Application
│       ├── 📄 package.json        # Dependencies and scripts
│       ├── 📄 vite.config.js      # Vite configuration
│       ├── 📄 tailwind.config.js  # Tailwind CSS config
│       ├── 📄 postcss.config.js   # PostCSS config
│       ├── 📄 index.html          # HTML entry point
│       ├── 📄 .gitignore          # Git ignore rules
│       ├── 📄 README.md           # Frontend documentation
│       │
│       └── 📂 src/                # Source code
│           ├── 📄 main.jsx        # React entry point
│           ├── 📄 App.jsx         # Main app component
│           ├── 📄 index.css       # Global styles
│           │
│           ├── 📂 assets/         # Static assets
│           │   ├── login.png      # Login illustration
│           │   ├── dashboard.png  # Dashboard screenshot
│           │   └── empty.png      # Empty state image
│           │
│           ├── 📂 components/     # Reusable components
│           │   ├── Navbar.jsx     # Top navigation bar
│           │   ├── Sidebar.jsx    # Side navigation menu
│           │   ├── ExpenseCard.jsx # Stat card component
│           │   └── ExpenseTable.jsx # Data table component
│           │
│           ├── 📂 pages/          # Page components
│           │   ├── Login.jsx      # Login page
│           │   ├── Signup.jsx     # Registration page
│           │   ├── Dashboard.jsx  # Main dashboard
│           │   ├── AddExpense.jsx # Add expense form
│           │   └── Reports.jsx    # Reports page
│           │
│           └── 📂 services/       # API services
│               ├── api.js         # Axios instance & interceptors
│               └── expenseService.js # API methods
│
├── 📂 backend/
│   └── 📂 spendwise-api/          # Spring Boot Application
│       ├── 📄 pom.xml             # Maven configuration & dependencies
│       ├── 📄 .gitignore          # Git ignore rules
│       ├── 📄 README.md           # Backend documentation
│       │
│       └── 📂 src/
│           └── 📂 main/
│               ├── 📂 java/
│               │   └── 📂 com/spendwise/
│               │       ├── 📄 SpendwiseApiApplication.java
│               │       │
│               │       ├── 📂 config/
│               │       │   └── SecurityConfig.java
│               │       │
│               │       ├── 📂 controller/
│               │       │   ├── AuthController.java
│               │       │   ├── ExpenseController.java
│               │       │   └── DashboardController.java
│               │       │
│               │       ├── 📂 service/
│               │       │   ├── AuthService.java
│               │       │   └── ExpenseService.java
│               │       │
│               │       ├── 📂 entity/
│               │       │   ├── User.java
│               │       │   └── Expense.java
│               │       │
│               │       ├── 📂 repository/
│               │       │   ├── UserRepository.java
│               │       │   └── ExpenseRepository.java
│               │       │
│               │       ├── 📂 security/
│               │       │   ├── JwtTokenProvider.java
│               │       │   └── JwtAuthenticationFilter.java
│               │       │
│               │       └── 📂 dto/
│               │           ├── LoginRequest.java
│               │           ├── SignupRequest.java
│               │           ├── ExpenseDTO.java
│               │           ├── UserDTO.java
│               │           ├── AuthResponse.java
│               │           ├── DashboardStats.java
│               │           ├── CategoryWiseTotal.java
│               │           └── MonthlySummary.java
│               │
│               └── 📂 resources/
│                   └── application.properties
│
└── 📂 database/
    ├── 📄 schema.sql              # Database schema & tables
    └── 📄 README.md               # Database documentation
```

## 📋 File Descriptions

### Root Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `SETUP_GUIDE.md` | Step-by-step setup instructions |
| `FEATURES_TECH_STACK.md` | Detailed features and technology information |
| `start.bat` | Windows quick start script |
| `start.sh` | macOS/Linux quick start script |

### Frontend Files

#### Configuration Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugins configuration |
| `index.html` | HTML entry point |
| `.gitignore` | Git ignore patterns |

#### Source Code
| Folder | Purpose |
|--------|---------|
| `src/main.jsx` | React application entry point |
| `src/App.jsx` | Root component with routing |
| `src/index.css` | Global styles |
| `src/components/` | Reusable UI components |
| `src/pages/` | Full page components |
| `src/services/` | API communication layer |
| `src/assets/` | Images and static files |

### Backend Files

#### Configuration
| File | Purpose |
|------|---------|
| `pom.xml` | Maven configuration, dependencies, plugins |
| `application.properties` | Spring Boot configuration |

#### Java Code Structure
| Folder | Purpose |
|--------|---------|
| `controller/` | REST API endpoints |
| `service/` | Business logic layer |
| `entity/` | JPA entity classes (Database models) |
| `repository/` | Data access layer |
| `dto/` | Data transfer objects |
| `security/` | JWT and authentication |
| `config/` | Application configuration |

### Database Files

| File | Purpose |
|------|---------|
| `schema.sql` | Database tables and indexes |
| `README.md` | Database setup instructions |

## 🔗 Key Dependencies

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.0",
  "lucide-react": "^0.294.0",
  "tailwindcss": "^3.3.6",
  "vite": "^5.0.0"
}
```

### Backend
```xml
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-starter-security
- mysql-connector-java:8.0.33
- jjwt-api:0.12.3
- jjwt-impl:0.12.3
- jjwt-jackson:0.12.3
- lombok
```

## 📝 Configuration Files Details

### `application.properties` (Backend)
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/spendwise_db
spring.datasource.username=root
spring.datasource.password=root

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false

# Server
server.port=8080

# JWT
jwt.secret=mySecretKeyForSpendWiseExpenseTrackerApplicationForJWTTokenGenerationAndValidation123456789
jwt.expiration=86400000

# CORS
server.cors.allowed-origins=http://localhost:3000
```

### `package.json` (Frontend)
```json
{
  "name": "spendwise-ui",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### `vite.config.js` (Frontend)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
  }
})
```

## 🔄 File Modification Guide

### To Add a New Page
1. Create component in `frontend/src/pages/NewPage.jsx`
2. Add route in `frontend/src/App.jsx`
3. Add navigation link in `frontend/src/components/Sidebar.jsx`

### To Add a New API Endpoint
1. Create controller in `backend/src/main/java/com/spendwise/controller/`
2. Create service in `backend/src/main/java/com/spendwise/service/`
3. Update `frontend/src/services/expenseService.js`

### To Add a New Component
1. Create component in `frontend/src/components/ComponentName.jsx`
2. Export and use in pages
3. Style with Tailwind CSS classes

### To Add Database Field
1. Update entity in `backend/.../entity/EntityName.java`
2. Spring Boot will auto-migrate
3. Update DTO if needed
4. Update frontend form

## 🎯 File Organization Principles

- **Separation of Concerns**: Each file has a single responsibility
- **Modularity**: Components are reusable and independent
- **Layer Architecture**: Clear separation between UI, business logic, and data
- **Configuration Centralization**: All configs in specific files
- **Testing Ready**: Structure supports unit and integration testing

---

**Last Updated**: 2024
**Project Version**: 1.0.0
