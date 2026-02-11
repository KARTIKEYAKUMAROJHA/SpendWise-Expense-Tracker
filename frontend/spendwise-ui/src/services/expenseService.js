import api from './api';

const expenseService = {
  // Auth APIs
  login: (email, password) => {
    return api.post('/auth/login', { email, password });
  },

  signup: (name, email, password) => {
    return api.post('/auth/signup', { name, email, password });
  },

  // Expense APIs
  getExpenses: () => {
    return api.get('/expenses');
  },

  getExpenseById: (id) => {
    return api.get(`/expenses/${id}`);
  },

  createExpense: (expenseData) => {
    return api.post('/expenses', expenseData);
  },

  updateExpense: (id, expenseData) => {
    return api.put(`/expenses/${id}`, expenseData);
  },

  deleteExpense: (id) => {
    return api.delete(`/expenses/${id}`);
  },

  // Dashboard APIs
  getDashboardStats: () => {
    return api.get('/dashboard/stats');
  },

  getCategoryWiseTotal: () => {
    return api.get('/dashboard/category-wise-total');
  },

  getMonthlySummary: () => {
    return api.get('/dashboard/monthly-summary');
  },
};

export default expenseService;
