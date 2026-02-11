import { Menu, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onToggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-secondary-bg border-b border-gray-700 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-text-primary hover:text-accent transition"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold text-accent">💰 SpendWise</h1>
      </div>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 bg-secondary-bg hover:bg-gray-700 px-4 py-2 rounded-lg text-text-primary transition"
        >
          <User size={20} />
          <span>{user.name || 'User'}</span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-secondary-bg border border-gray-700 rounded-lg shadow-lg z-50">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 hover:bg-gray-700 flex items-center gap-2 text-text-primary hover:text-accent transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
