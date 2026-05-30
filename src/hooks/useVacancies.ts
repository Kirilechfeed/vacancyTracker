import { useState, useCallback, useEffect } from "react";
import { Vacancy, VacancyStatus } from "@/types/index";
import {
  getVacancies,
  addVacancy,
  updateVacancy,
  deleteVacancy,
} from "@lib/storage";

export function useVacancies() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const data = getVacancies();
    setVacancies(data);
    setIsLoading(false);
  }, []);

  const addVacancyLocal = useCallback((vacancy: Vacancy) => {
    addVacancy(vacancy);
    setVacancies((prev) => [...prev, vacancy]);
  }, []);

  const updateVacancyLocal = useCallback(
    (id: string, updates: Partial<Vacancy>) => {
      updateVacancy(id, updates);
      setVacancies((prev) =>
        prev.map((v) => (v.id === id ? { ...v, ...updates } : v)),
      );
    },
    [],
  );

  const deleteVacancyLocal = useCallback((id: string) => {
    deleteVacancy(id);
    setVacancies((prev) => prev.filter((v) => v.id !== id));
  }, []);

  const updateStatus = useCallback(
    (id: string, status: VacancyStatus) => {
      updateVacancyLocal(id, { status });
    },
    [updateVacancyLocal],
  );

  return {
    vacancies,
    isLoading,
    addVacancy: addVacancyLocal,
    updateVacancy: updateVacancyLocal,
    deleteVacancy: deleteVacancyLocal,
    updateStatus,
  };
}
