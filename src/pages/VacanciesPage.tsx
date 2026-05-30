
import { Navigation } from '@components/Navigation';
import { VacanciesTable } from '@components/VacanciesTable';
import { useChangeStatusVacancy } from '@hooks/useChangeStatusVacancy';
import { useGetVacancies } from '@hooks/useGetVacancies';
import {useDeleteVacancy} from "@hooks/useDeleteVacancy";
export function VacanciesPage() {
 
  const { data, isLoading, error } = useGetVacancies();
  const changeStatusMutation = useChangeStatusVacancy();
  const deleteVacancyMutation = useDeleteVacancy();
  if (isLoading) {
    return <div className="text-center py-8">Загрузка...</div>;
  }

  return (
    <div className="space-y-6">
      <Navigation />
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Мои вакансии</h2>
        <VacanciesTable
          vacancies={data || []}
          onChangeStatus={changeStatusMutation.mutate}
          onDelete={deleteVacancyMutation.mutate} // Placeholder - implement actual delete functionality
        />
      </div>
    </div>
  );
}
