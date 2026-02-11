import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import expenseService from '../services/expenseService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await expenseService.login(email, password);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-accent mb-2">💰 SpendWise</h1>
            <p className="text-text-primary text-sm">Expense Tracker</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-text-primary text-sm mb-2">Email</label>
              <div className="flex items-center bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3">
                <Mail size={20} className="text-accent mr-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="bg-transparent text-text-primary outline-none w-full placeholder-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-text-primary text-sm mb-2">Password</label>
              <div className="flex items-center bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3">
                <Lock size={20} className="text-accent mr-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-transparent text-text-primary outline-none w-full placeholder-gray-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-primary-bg font-semibold py-3 rounded-lg hover:bg-green-500 transition disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-text-primary text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-accent hover:text-green-400 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-secondary-bg items-center justify-center p-6">
        <div className="text-center">
          <div className="text-9xl mb-4">📊</div>
          <h2 className="text-3xl font-bold text-accent mb-4">Track Your Spending</h2>
          <p className="text-text-primary text-lg max-w-sm">
            Take control of your finances with SpendWise. Monitor expenses, set budgets, and achieve your financial goals.
          </p>
        </div>
      </div>
    </div>
  );
}
