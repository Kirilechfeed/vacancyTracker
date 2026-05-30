
import { Navigation } from '@components/Navigation';
import { AnalyticsCharts } from '@components/AnalyticsCharts';
import { StatsCards } from '@components/StatsCards';
import { useGetVacancies } from '@hooks/useGetVacancies';


export function AnalyticsPage() {

  const { data, isLoading, error } = useGetVacancies();
  if (isLoading) {
    return <div className="text-center py-8">Загрузка...</div>;
  }

  return (
    <div className="space-y-6">
      <Navigation />
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Аналитика</h2>
          <StatsCards vacancies={data || []} />
        </div>
        <AnalyticsCharts vacancies={data || []} />
      </div>
    </div>
  );
}
