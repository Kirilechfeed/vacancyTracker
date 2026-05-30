import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vacancy Tracker</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Трекер для отслеживания вакансий и откликов
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Возможности</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>Добавление и управление вакансиями</li>
              <li>Отслеживание статусов</li>
              <li>Детальная аналитика</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Стек</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React • Tailwind CSS • TanStack Query • Recharts
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2026 Vacancy Tracker. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
