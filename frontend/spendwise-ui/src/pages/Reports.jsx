import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import expenseService from '../services/expenseService';

export default function Reports() {
  const [categoryWise, setCategoryWise] = useState([]);
  const [monthlySummary, setMonthlySummary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const [categoryRes, monthlyRes] = await Promise.all([
        expenseService.getCategoryWiseTotal(),
        expenseService.getMonthlySummary(),
      ]);
      setCategoryWise(categoryRes.data || []);
      setMonthlySummary(monthlyRes.data || []);
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-text-primary">Loading reports...</p>
        </div>
      </div>
    );
  }

  const totalExpense = categoryWise.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">Reports</h1>
        <p className="text-text-primary">Analyze your spending patterns</p>
      </div>

      {/* Category Wise Total */}
      <div>
        <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
          <BarChart3 size={28} />
          Category-wise Expenses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryWise.length > 0 ? (
            categoryWise.map((item) => (
              <div
                key={item.category}
                className="bg-secondary-bg rounded-lg p-6 border border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">{item.category}</h3>
                  <span className="text-accent font-bold text-xl">₹{item.total.toFixed(2)}</span>
                </div>
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-accent h-full transition-all duration-500"
                    style={{
                      width: `${(item.total / totalExpense) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  {((item.total / totalExpense) * 100).toFixed(1)}% of total
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-text-primary">No expenses to report yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Monthly Summary */}
      <div>
        <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
          <TrendingUp size={28} />
          Monthly Summary
        </h2>
        <div className="bg-secondary-bg rounded-lg border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Month</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-accent">
                  Total Expense
                </th>
              </tr>
            </thead>
            <tbody>
              {monthlySummary.length > 0 ? (
                monthlySummary.map((item) => (
                  <tr key={item.month} className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="px-6 py-4 text-text-primary font-medium">{item.month}</td>
                    <td className="px-6 py-4 text-accent font-semibold">₹{item.total.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-8 text-center text-text-primary">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
