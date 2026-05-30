import React, { useState } from 'react';
import { Vacancy, VacancyStatus, JobSource } from '@/types/index';
import { getStatusColor, formatDate } from '@lib/utils';
import { ChevronDown, Trash2, ExternalLink } from 'lucide-react';

interface VacanciesTableProps {
  vacancies: Vacancy[];
  onChangeStatus: (payload: { id: string; status: VacancyStatus }) => void;
  onDelete: (id: string) => void;
}

export function VacanciesTable({ vacancies, onChangeStatus, onDelete }: VacanciesTableProps) {

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<VacancyStatus | 'All'>('All');
  const [filterSource, setFilterSource] = useState<JobSource | 'All'>('All');

  const statuses: VacancyStatus[] = ['Applied', 'Viewed', 'Interview invited', 'Interview done', 'Offer', 'Rejected'];
  const sources: JobSource[] = ['LinkedIn', 'Indeed', 'Djinni', 'Work.ua', 'HH.ru', 'Robota.ua', 'Other'];

  const filtered = vacancies.filter(v => {
    const statusMatch = filterStatus === 'All' || v.status === filterStatus;
    const sourceMatch = filterSource === 'All' || v.source === filterSource;
    return statusMatch && sourceMatch;
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Фильтр по статусу
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as VacancyStatus | 'All')}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">Все статусы</option>
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Фильтр по сайту
          </label>
          <select
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value as JobSource | 'All')}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">Все сайты</option>
            {sources.map(source => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        Найдено вакансий: <strong>{filtered.length}</strong>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Нет вакансий, соответствующих фильтрам
          </div>
        ) : (
          filtered.map(vacancy => (
            <div
              key={vacancy.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition-all"
            >
              <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => setExpandedId(expandedId === vacancy.id ? null : vacancy.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{vacancy.company}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(vacancy.status)}`}>
                      {vacancy.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{vacancy.position}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>{vacancy.source}</span>
                    <span>{formatDate(vacancy.dateApplied)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={vacancy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="text-blue-500" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(vacancy.id);
                    }}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      expandedId === vacancy.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {expandedId === vacancy.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Изменить статус:</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {statuses.map(status => (
                        <button
                          key={status}
                          onClick={() => onChangeStatus({ id: vacancy.id, status })}
                          className={`text-xs px-3 py-1 rounded transition-colors ${
                            vacancy.status === status
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {vacancy.comment && (
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Комментарий:</label>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{vacancy.comment}</p>
                    </div>
                  )}

                  {vacancy.tags && vacancy.tags.length > 0 && (
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Теги:</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {vacancy.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
