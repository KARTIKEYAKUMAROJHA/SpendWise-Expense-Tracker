#!/bin/bash
# SpendWise Expense Tracker - Quick Start Script for macOS/Linux
# This script helps with common setup and development tasks

show_menu() {
    echo ""
    echo "=========================================="
    echo "  SpendWise Expense Tracker"
    echo "  Quick Start Script (macOS/Linux)"
    echo "=========================================="
    echo ""
    echo "Choose an option:"
    echo ""
    echo "1. Setup Database (Create tables)"
    echo "2. Start Backend (Spring Boot)"
    echo "3. Start Frontend (React Dev Server)"
    echo "4. Start Both (Backend + Frontend)"
    echo "5. Check Prerequisites"
    echo "6. View Application (Open in browser)"
    echo "0. Exit"
    echo ""
    read -p "Enter your choice (0-6): " choice
    
    case $choice in
        1) setup_database ;;
        2) start_backend ;;
        3) start_frontend ;;
        4) start_both ;;
        5) check_prerequisites ;;
        6) open_browser ;;
        0) exit 0 ;;
        *) echo "Invalid choice. Please try again." && show_menu ;;
    esac
}

setup_database() {
    echo ""
    echo "Setting up database..."
    echo "Please make sure MySQL is running!"
    echo ""
    
    cd "$(dirname "$0")/database"
    
    if command -v mysql &> /dev/null; then
        mysql -u root -proot < schema.sql
        if [ $? -eq 0 ]; then
            echo ""
            echo "[OK] Database setup completed successfully!"
        else
            echo ""
            echo "[ERROR] Database setup failed. Please check:"
            echo "- MySQL is running"
            echo "- Credentials are correct (root/root)"
            echo "- schema.sql path is correct"
        fi
    else
        echo "[ERROR] MySQL client not found. Please install MySQL first."
    fi
    
    read -p "Press Enter to continue..."
    show_menu
}

start_backend() {
    echo ""
    echo "Starting Backend (Spring Boot)..."
    echo ""
    
    cd "$(dirname "$0")/backend/spendwise-api"
    
    if ! command -v mvn &> /dev/null; then
        echo "[ERROR] Maven not found. Please install Maven first."
        read -p "Press Enter to continue..."
        show_menu
        return
    fi
    
    echo "Starting application on http://localhost:8080"
    mvn spring-boot:run
}

start_frontend() {
    echo ""
    echo "Starting Frontend (React Dev Server)..."
    echo ""
    
    cd "$(dirname "$0")/frontend/spendwise-ui"
    
    if ! command -v node &> /dev/null; then
        echo "[ERROR] Node.js not found. Please install Node.js first."
        read -p "Press Enter to continue..."
        show_menu
        return
    fi
    
    echo "Installing dependencies if needed..."
    if [ ! -d "node_modules" ]; then
        npm install
    fi
    
    echo "Starting development server on http://localhost:3000"
    npm run dev
}

start_both() {
    echo ""
    echo "Starting Both Backend and Frontend..."
    echo ""
    
    cd "$(dirname "$0")/backend/spendwise-api"
    echo "Starting Backend..."
    mvn spring-boot:run &
    BACKEND_PID=$!
    
    sleep 5
    
    cd "$(dirname "$0")/frontend/spendwise-ui"
    echo "Starting Frontend..."
    npm run dev &
    FRONTEND_PID=$!
    
    echo ""
    echo "Both services are starting..."
    echo "- Backend: http://localhost:8080"
    echo "- Frontend: http://localhost:3000"
    echo ""
    echo "Press Ctrl+C to stop all services"
    
    wait
}

check_prerequisites() {
    echo ""
    echo "Checking Prerequisites..."
    echo ""
    
    echo "Checking Node.js..."
    if command -v node &> /dev/null; then
        node --version
        echo "[OK] Node.js is installed"
    else
        echo "[ERROR] Node.js is not installed"
    fi
    echo ""
    
    echo "Checking npm..."
    if command -v npm &> /dev/null; then
        npm --version
        echo "[OK] npm is installed"
    else
        echo "[ERROR] npm is not installed"
    fi
    echo ""
    
    echo "Checking Java..."
    if command -v java &> /dev/null; then
        java -version
        echo "[OK] Java is installed"
    else
        echo "[ERROR] Java is not installed"
    fi
    echo ""
    
    echo "Checking Maven..."
    if command -v mvn &> /dev/null; then
        mvn --version
        echo "[OK] Maven is installed"
    else
        echo "[ERROR] Maven is not installed"
    fi
    echo ""
    
    echo "Checking MySQL..."
    if command -v mysql &> /dev/null; then
        mysql --version
        echo "[OK] MySQL is installed"
    else
        echo "[ERROR] MySQL is not installed"
    fi
    echo ""
    
    read -p "Press Enter to continue..."
    show_menu
}

open_browser() {
    echo ""
    echo "Opening application in browser..."
    echo ""
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:3000
    else
        xdg-open http://localhost:3000
    fi
    
    echo "Application should open in your default browser."
    echo ""
    read -p "Press Enter to continue..."
    show_menu
}

# Main script
show_menu
