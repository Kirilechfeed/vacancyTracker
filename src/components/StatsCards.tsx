import React, { useMemo } from 'react';
import { Vacancy } from '@types/index';

interface StatsCardsProps {
  vacancies: Vacancy[];
}

export function StatsCards({ vacancies }: StatsCardsProps) {
  const stats = useMemo(() => {
    const totalApplications = vacancies.length;
    
    const statusCounts = vacancies.reduce((acc, v) => {
      acc[v.status] = (acc[v.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const interviews = (statusCounts['Interview invited'] || 0) + (statusCounts['Interview done'] || 0);
    const offers = statusCounts['Offer'] || 0;
    const rejected = statusCounts['Rejected'] || 0;

    const successRate = totalApplications > 0 
      ? Math.round((offers / totalApplications) * 100)
      : 0;

    const interviewRate = totalApplications > 0
      ? Math.round((interviews / totalApplications) * 100)
      : 0;

    return {
      totalApplications,
      interviews,
      offers,
      rejected,
      successRate,
      interviewRate,
    };
  }, [vacancies]);

  const cards = [
    {
      label: 'Всего откликов',
      value: stats.totalApplications,
      color: 'blue',
      icon: '📄',
    },
    {
      label: 'Приглашения на интервью',
      value: stats.interviews,
      color: 'purple',
      icon: '📞',
    },
    {
      label: 'Предложения',
      value: stats.offers,
      color: 'green',
      icon: '✨',
    },
    {
      label: 'Отказы',
      value: stats.rejected,
      color: 'red',
      icon: '❌',
    },
    {
      label: 'Уровень успеха',
      value: `${stats.successRate}%`,
      color: 'yellow',
      icon: '🎯',
    },
    {
      label: 'Уровень интервью',
      value: `${stats.interviewRate}%`,
      icon: '📈',
      color: 'cyan',
    },
  ];

  const bgColors = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    cyan: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg border ${bgColors[card.color as keyof typeof bgColors]}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{card.value}</p>
            </div>
            <span className="text-4xl">{card.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
