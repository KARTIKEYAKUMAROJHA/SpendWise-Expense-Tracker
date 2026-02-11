# SpendWise Expense Tracker - Frontend

A modern, responsive React + Vite frontend for the SpendWise Expense Tracker application.

## Features

- 🎨 Modern dark theme with green accent
- 📱 Fully responsive design
- 🔐 JWT-based authentication
- 💰 Expense tracking and management
- 📊 Dashboard with financial overview
- 📈 Reports and analytics
- ⚡ Fast performance with Vite

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
cd frontend/spendwise-ui
npm install
```

## Configuration

The API base URL is configured in `src/services/api.js`:
```javascript
baseURL: 'http://localhost:8080/api'
```

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Build

```bash
npm run build
```

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios
- React Router
- Lucide Icons

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable components
├── pages/          # Page components
├── services/       # API services
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Environment Variables

Create a `.env.local` file if needed:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

## License

MIT
