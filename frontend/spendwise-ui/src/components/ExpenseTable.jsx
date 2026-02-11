import { Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import expenseService from '../services/expenseService';

export default function ExpenseTable({ expenses, onRefresh }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await expenseService.deleteExpense(id);
        onRefresh();
      } catch (error) {
        alert('Error deleting expense');
      }
    }
  };

  const handleEdit = (expense) => {
    setEditingId(expense.id);
    setEditData(expense);
  };

  const handleUpdate = async () => {
    try {
      await expenseService.updateExpense(editingId, editData);
      setEditingId(null);
      onRefresh();
    } catch (error) {
      alert('Error updating expense');
    }
  };

  if (!expenses || expenses.length === 0) {
    return (
      <div className="bg-secondary-bg rounded-lg p-12 border border-gray-700 text-center">
        <p className="text-text-primary text-lg">No expenses found. Start by adding one!</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary-bg rounded-lg border border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700 bg-gray-800">
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-accent">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4 text-text-primary">{expense.title}</td>
                <td className="px-6 py-4 text-accent font-semibold">₹{expense.amount.toFixed(2)}</td>
                <td className="px-6 py-4 text-text-primary">
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {expense.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-primary text-sm">
                  {new Date(expense.expenseDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(expense)}
                    className="text-accent hover:text-green-400 transition"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
