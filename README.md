# SpendWise Expense Tracker 💰

A complete production-ready full-stack expense tracking application.

## Project Structure

```
SpendWise-Expense-Tracker/
├── frontend/
│   └── spendwise-ui/          # React + Vite frontend
│       ├── src/
│       │   ├── assets/        # Static assets
│       │   ├── components/    # Reusable components
│       │   ├── pages/         # Page components
│       │   ├── services/      # API services
│       │   ├── App.jsx        # Main app
│       │   └── main.jsx       # Entry point
│       ├── package.json
│       ├── vite.config.js
│       └── README.md
│
├── backend/
│   └── spendwise-api/         # Spring Boot 3 API
│       ├── src/main/java/com/spendwise/
│       │   ├── config/        # Configuration
│       │   ├── controller/    # REST controllers
│       │   ├── service/       # Business logic
│       │   ├── entity/        # JPA entities
│       │   ├── repository/    # Data access
│       │   ├── security/      # Security config
│       │   ├── dto/           # Data transfer objects
│       │   └── SpendwiseApiApplication.java
│       ├── pom.xml
│       └── README.md
│
├── database/
│   ├── schema.sql            # Database schema
│   └── README.md
│
└── README.md
```

## Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation
- **Lucide Icons** - Icons

### Backend
- **Java 17** - Programming language
- **Spring Boot 3** - Framework
- **Spring Web** - REST API
- **Spring Data JPA** - ORM
- **Spring Security** - Authentication
- **JWT** - Token-based auth
- **Lombok** - Code generation
- **MySQL** - Database

### Database
- **MySQL 8.0+**

## Quick Start

### Prerequisites
- Node.js 16+ (Frontend)
- Java 17+ (Backend)
- Maven 3.8+ (Backend)
- MySQL 8.0+ (Database)

### 1. Database Setup

```bash
cd database
mysql -u root -p < schema.sql
```

Or manually execute the SQL statements in `schema.sql`.

### 2. Backend Setup

```bash
cd backend/spendwise-api

# Build
mvn clean package

# Run
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080`

### 3. Frontend Setup

```bash
cd frontend/spendwise-ui

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend runs on: `http://localhost:3000`

## Features

### 🔐 Authentication
- User registration and login
- JWT token-based authentication
- Secure password encryption with BCrypt
- Protected routes

### 💰 Expense Management
- Create, read, update, delete expenses
- Categorize expenses
- Track expense dates
- Add notes to expenses

### 📊 Dashboard
- Total expense overview
- Monthly expense summary
- Categories count
- Recent expenses list

### 📈 Reports & Analytics
- Category-wise expense breakdown
- Monthly spending summary
- Visual progress bars
- Historical data

### 🎨 UI/UX
- Modern dark theme (#0f0f0f background, #1a1a1a cards)
- Green accent color (#22c55e)
- Fully responsive design
- Mobile-friendly
- Collapsible sidebar
- Smooth animations

## API Endpoints

### Authentication
```
POST   /api/auth/signup       - Register new user
POST   /api/auth/login        - Login user
```

### Expenses
```
GET    /api/expenses          - Get all expenses
GET    /api/expenses/{id}     - Get expense by ID
POST   /api/expenses          - Create new expense
PUT    /api/expenses/{id}     - Update expense
DELETE /api/expenses/{id}     - Delete expense
```

### Dashboard
```
GET    /api/dashboard/stats                  - Dashboard statistics
GET    /api/dashboard/category-wise-total    - Category breakdown
GET    /api/dashboard/monthly-summary        - Monthly totals
```

## Configuration

### Frontend
API base URL: `http://localhost:8080/api` (configured in `src/services/api.js`)

### Backend
- Database: `spendwise_db`
- User: `root`
- Password: `root`
- JWT Secret: Configured in `application.properties`
- JWT Expiration: 24 hours

### Database
- Host: `localhost:3306`
- Database: `spendwise_db`
- Credentials: root/root

## Development

### Frontend Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Commands
```bash
mvn clean package       # Build project
mvn spring-boot:run     # Run application
mvn test                # Run tests
```

## Security Features

- ✅ JWT Authentication
- ✅ Password Encryption (BCrypt)
- ✅ CORS Configuration
- ✅ SQL Injection Prevention
- ✅ User Authorization
- ✅ Stateless API design

## Color Theme

```css
Background:     #0f0f0f (Primary dark)
Cards:          #1a1a1a (Secondary dark)
Text:           #e5e5e5 (Light gray)
Accent:         #22c55e (Green)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large: 1280px and up

## Performance

- Vite for fast bundling
- Code splitting
- Lazy loading
- Optimized images
- Spring Boot production ready

## Production Deployment

### Frontend
```bash
npm run build
# Deploy dist/ folder to any static hosting
```

### Backend
```bash
mvn clean package
java -jar target/spendwise-api-1.0.0.jar
```

## Troubleshooting

### Port Already in Use
- Frontend: Change port in `vite.config.js`
- Backend: Change port in `application.properties`

### Database Connection Error
- Verify MySQL is running
- Check credentials in `application.properties`
- Ensure `spendwise_db` exists

### CORS Errors
- Check frontend URL in backend `SecurityConfig.java`
- Verify backend is running on port 8080

## License

MIT

## Author

Generated as a production-ready full-stack application.
