
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@components/Navigation';
import { AddVacancyForm } from '@components/AddVacancyForm';

import { useAddVacancy } from '@hooks/useAddVacancy';
export function AddVacancyPage() {
  const navigate = useNavigate();
  const { mutate: addVacancy } = useAddVacancy();

  const handleAdd = (vacancy: any) => {
    addVacancy(vacancy);
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <Navigation />
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
        <AddVacancyForm onAdd={handleAdd} />
      </div>
    </div>
  );
}
