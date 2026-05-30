import { useMemo } from 'react';
import type { Vacancy } from '@/types';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface AnalyticsChartsProps {
  vacancies: Vacancy[];
}

export function AnalyticsCharts({ vacancies }: AnalyticsChartsProps) {
  const applicationsPerDay = useMemo(() => {
    const grouped: Record<string, number> = {};
    vacancies.forEach(v => {
      grouped[v.dateApplied] = (grouped[v.dateApplied] || 0) + 1;
    });
    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({
        date: new Date(date).toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' }),
        count,
      }));
  }, [vacancies]);

  const statusDistribution = useMemo(() => {
    const grouped: Record<string, number> = {};
    vacancies.forEach(v => {
      grouped[v.status] = (grouped[v.status] || 0) + 1;
    });
    return Object.entries(grouped).map(([status, count]) => ({
      name: status,
      value: count,
    }));
  }, [vacancies]);

  const sourceDistribution = useMemo(() => {
    const grouped: Record<string, number> = {};
    vacancies.forEach(v => {
      grouped[v.source] = (grouped[v.source] || 0) + 1;
    });
    return Object.entries(grouped).map(([source, count]) => ({
      name: source,
      count,
    }));
  }, [vacancies]);

  const conversionFunnel = useMemo(() => {
    const statusOrder = ['Applied', 'Viewed', 'Interview invited', 'Interview done', 'Offer'];
    const counts: Record<string, number> = {};
    vacancies.forEach(v => {
      const idx = statusOrder.indexOf(v.status);
      if (idx !== -1) {
        for (let i = 0; i <= idx; i++) {
          counts[statusOrder[i]] = (counts[statusOrder[i]] || 0) + 1;
        }
      }
    });
    return statusOrder.map(status => ({
      name: status,
      count: counts[status] || 0,
    }));
  }, [vacancies]);

  const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#EF4444'];

  if (vacancies.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500 dark:text-gray-400">
        Добавьте вакансии для просмотра аналитики
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Applications per day */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📊 Количество откликов по дням
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={applicationsPerDay}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: '#3B82F6' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Status Distribution */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📊 Распределение статусов
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {statusDistribution.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Source Distribution */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📊 Источники вакансий
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sourceDistribution}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🔥 Воронка: Applied → Offer
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={conversionFunnel} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" stroke="#6b7280" />
            <YAxis type="category" dataKey="name" stroke="#6b7280" width={120} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Bar dataKey="count" fill="#10B981" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
