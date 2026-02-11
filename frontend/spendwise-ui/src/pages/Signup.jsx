import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import expenseService from '../services/expenseService';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await expenseService.signup(name, email, password);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg flex">
      <div className="hidden md:flex md:w-1/2 bg-secondary-bg items-center justify-center p-6">
        <div className="text-center">
          <div className="text-9xl mb-4">💡</div>
          <h2 className="text-3xl font-bold text-accent mb-4">Smart Spending</h2>
          <p className="text-text-primary text-lg max-w-sm">
            Get started with SpendWise and make informed financial decisions with our powerful expense tracking tools.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-accent mb-2">💰 SpendWise</h1>
            <p className="text-text-primary text-sm">Create your account</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {error && (
              <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-text-primary text-sm mb-2">Full Name</label>
              <div className="flex items-center bg-secondary-bg border border-gray-700 rounded-lg px-4 py-3">
                <User size={20} className="text-accent mr-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="bg-transparent text-text-primary outline-none w-full placeholder-gray-600"
                />
              </div>
            </div>

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
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>

          <p className="text-center text-text-primary text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:text-green-400 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
