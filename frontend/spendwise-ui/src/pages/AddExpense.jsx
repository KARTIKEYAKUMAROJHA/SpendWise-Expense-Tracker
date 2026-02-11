import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';
import expenseService from '../services/expenseService';

const categories = [
  'Food & Dining',
  'Transportation',
  'Shopping',
  'Entertainment',
  'Bills & Utilities',
  'Healthcare',
  'Education',
  'Travel',
  'Other',
];

export default function AddExpense() {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food & Dining',
    date: new Date().toISOString().split('T')[0],
    note: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await expenseService.createExpense({
        ...formData,
        amount: parseFloat(formData.amount),
      });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating expense');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-accent hover:text-green-400 mb-4"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <h1 className="text-4xl font-bold text-accent">Add Expense</h1>
        <p className="text-text-primary mt-2">Track a new expense</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label className="block text-text-primary text-sm font-medium mb-2">
            Expense Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Grocery Shopping"
            required
            className="w-full bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3 text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-text-primary text-sm font-medium mb-2">
              Amount (₹) *
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              required
              className="w-full bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3 text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent transition"
            />
          </div>

          <div>
            <label className="block text-text-primary text-sm font-medium mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-secondary-bg">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-text-primary text-sm font-medium mb-2">Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition"
          />
        </div>

        <div>
          <label className="block text-text-primary text-sm font-medium mb-2">Note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Add any notes about this expense..."
            rows="4"
            className="w-full bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3 text-text-primary placeholder-gray-600 focus:outline-none focus:border-accent transition resize-none"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-accent text-primary-bg font-semibold py-3 rounded-lg hover:bg-green-500 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Save size={20} />
            {loading ? 'Saving...' : 'Save Expense'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="flex-1 bg-gray-700 text-text-primary font-semibold py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
