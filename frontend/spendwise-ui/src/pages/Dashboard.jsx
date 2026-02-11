import { useState, useEffect } from 'react';
import { TrendingDown, CreditCard, Layers } from 'lucide-react';
import ExpenseCard from '../components/ExpenseCard';
import ExpenseTable from '../components/ExpenseTable';
import expenseService from '../services/expenseService';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [stats, setStats] = useState({
    totalExpense: 0,
    monthlyExpense: 0,
    categoriesCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [expensesRes, statsRes] = await Promise.all([
        expenseService.getExpenses(),
        expenseService.getDashboardStats(),
      ]);
      setExpenses(expensesRes.data || []);
      setStats(statsRes.data || {});
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-text-primary">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">Dashboard</h1>
        <p className="text-text-primary">Welcome back! Here's your financial overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExpenseCard
          title="Total Expenses"
          amount={stats.totalExpense || 0}
          icon="💰"
          color="text-accent"
        />
        <ExpenseCard
          title="This Month"
          amount={stats.monthlyExpense || 0}
          icon="📊"
          color="text-blue-500"
        />
        <ExpenseCard
          title="Categories"
          amount={stats.categoriesCount || 0}
          icon="🏷️"
          color="text-purple-500"
        />
      </div>

      {/* Recent Expenses */}
      <div>
        <h2 className="text-2xl font-bold text-accent mb-4">Recent Expenses</h2>
        <ExpenseTable expenses={expenses.slice(0, 10)} onRefresh={fetchData} />
      </div>
    </div>
  );
}
