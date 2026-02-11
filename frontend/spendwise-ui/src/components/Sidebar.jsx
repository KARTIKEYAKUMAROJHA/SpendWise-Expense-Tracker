import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Plus, TrendingDown, X } from 'lucide-react';

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/add-expense', label: 'Add Expense', icon: Plus },
    { path: '/reports', label: 'Reports', icon: TrendingDown },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:relative w-64 h-screen bg-secondary-bg border-r border-gray-700 transition-transform duration-300 z-50 lg:z-auto ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-accent">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-text-primary hover:text-accent"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-accent text-primary-bg font-semibold'
                    : 'text-text-primary hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
