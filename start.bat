@echo off
REM SpendWise Expense Tracker - Quick Start Script for Windows
REM This script helps with common setup and development tasks

setlocal enabledelayedexpansion

cls
echo ========================================
echo   SpendWise Expense Tracker
echo   Quick Start Script (Windows)
echo ========================================
echo.

:menu
echo.
echo Choose an option:
echo.
echo 1. Setup Database (Create tables)
echo 2. Start Backend (Spring Boot)
echo 3. Start Frontend (React Dev Server)
echo 4. Start Both (Backend + Frontend in new terminals)
echo 5. Check Prerequisites
echo 6. View Application (Open in browser)
echo 7. Stop All Services
echo 0. Exit
echo.

set /p choice="Enter your choice (0-7): "

if "%choice%"=="1" goto setup_db
if "%choice%"=="2" goto start_backend
if "%choice%"=="3" goto start_frontend
if "%choice%"=="4" goto start_both
if "%choice%"=="5" goto check_prereq
if "%choice%"=="6" goto open_browser
if "%choice%"=="7" goto stop_services
if "%choice%"=="0" exit /b 0

echo Invalid choice. Please try again.
goto menu

:setup_db
echo.
echo Setting up database...
echo Please make sure MySQL is running!
echo.
set /p db_path="Enter MySQL bin path (default: C:\Program Files\MySQL\MySQL Server 8.0\bin): "
if "%db_path%"=="" set "db_path=C:\Program Files\MySQL\MySQL Server 8.0\bin"

cd /d "%~dp0database"
"%db_path%\mysql.exe" -u root -proot < schema.sql

if %errorlevel% equ 0 (
    echo.
    echo [OK] Database setup completed successfully!
) else (
    echo.
    echo [ERROR] Database setup failed. Please check:
    echo - MySQL is running
    echo - Credentials are correct (root/root)
    echo - schema.sql path is correct
)
pause
goto menu

:start_backend
echo.
echo Starting Backend (Spring Boot)...
echo.
cd /d "%~dp0backend\spendwise-api"

echo Checking Maven...
call mvn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Maven not found. Please install Maven first.
    pause
    goto menu
)

echo Starting application on http://localhost:8080
timeout /t 2 >nul
call mvn spring-boot:run

pause
goto menu

:start_frontend
echo.
echo Starting Frontend (React Dev Server)...
echo.
cd /d "%~dp0frontend\spendwise-ui"

echo Checking Node.js...
call node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Please install Node.js first.
    pause
    goto menu
)

echo Installing dependencies if needed...
if not exist "node_modules" (
    call npm install
)

echo Starting development server on http://localhost:3000
timeout /t 2 >nul
call npm run dev

pause
goto menu

:start_both
echo.
echo Starting Both Backend and Frontend...
echo.

echo Opening Backend terminal...
cd /d "%~dp0backend\spendwise-api"
start "SpendWise Backend" cmd /k "mvn spring-boot:run"

echo Opening Frontend terminal...
cd /d "%~dp0frontend\spendwise-ui"
start "SpendWise Frontend" cmd /k "npm run dev"

echo.
echo Both services are starting in new terminal windows...
echo - Backend: http://localhost:8080
echo - Frontend: http://localhost:3000
echo.
echo Note: This may take 30-60 seconds to fully start.
timeout /t 5 >nul
goto menu

:check_prereq
echo.
echo Checking Prerequisites...
echo.

echo Checking Node.js...
call node --version >nul 2>&1
if %errorlevel% equ 0 (
    call node --version
    echo [OK] Node.js is installed
) else (
    echo [ERROR] Node.js is not installed
)
echo.

echo Checking npm...
call npm --version >nul 2>&1
if %errorlevel% equ 0 (
    call npm --version
    echo [OK] npm is installed
) else (
    echo [ERROR] npm is not installed
)
echo.

echo Checking Java...
call java -version 2>&1 | find "17" >nul
if %errorlevel% equ 0 (
    call java -version
    echo [OK] Java 17 is installed
) else (
    echo [WARNING] Java 17 may not be installed. Found version:
    call java -version
)
echo.

echo Checking Maven...
call mvn --version >nul 2>&1
if %errorlevel% equ 0 (
    call mvn --version
    echo [OK] Maven is installed
) else (
    echo [ERROR] Maven is not installed
)
echo.

echo Checking MySQL...
call mysql --version >nul 2>&1
if %errorlevel% equ 0 (
    call mysql --version
    echo [OK] MySQL is installed
) else (
    echo [ERROR] MySQL is not installed
)
echo.

pause
goto menu

:open_browser
echo.
echo Opening application in browser...
echo.
timeout /t 2 >nul
start http://localhost:3000
echo Application should open in your default browser.
echo.
pause
goto menu

:stop_services
echo.
echo Stopping all services...
echo.

taskkill /F /IM node.exe /T >nul 2>&1
if %errorlevel% equ 0 echo [OK] Frontend process stopped

taskkill /F /IM java.exe /T >nul 2>&1
if %errorlevel% equ 0 echo [OK] Backend process stopped

echo.
echo All services stopped.
echo.
pause
goto menu

:end
endlocal
