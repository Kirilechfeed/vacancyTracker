import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, PlusCircle, ListIcon } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Вакансии', icon: ListIcon },
    { path: '/add', label: 'Добавить', icon: PlusCircle },
    { path: '/analytics', label: 'Аналитика', icon: BarChart3 },
  ];

  return (
    <nav className="flex gap-2 flex-wrap">
      {navItems.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isActive(path)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <Icon size={18} />
          <span className="text-sm font-medium">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
