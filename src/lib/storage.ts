import type { Vacancy, VacancyStatus } from "@/types";

const STORAGE_KEY = "vacancy-tracker-data";

export function getVacancies(): Vacancy[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveVacancies(vacancies: Vacancy[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vacancies));
}

export function addVacancy(vacancy: Vacancy): void {
  const vacancies = getVacancies();
  vacancies.push(vacancy);
  saveVacancies(vacancies);
}

export function updateVacancy(id: string, updates: Partial<Vacancy>): void {
  const vacancies = getVacancies();
  const index = vacancies.findIndex((v) => v.id === id);
  if (index !== -1) {
    vacancies[index] = { ...vacancies[index], ...updates };
    saveVacancies(vacancies);
  }
}

export function deleteVacancy(id: string): void {
  const vacancies = getVacancies();
  saveVacancies(vacancies.filter((v) => v.id !== id));
}

export function updateVacancyStatus(id: string, status: VacancyStatus): void {
  updateVacancy(id, { status });
}

export function getVacancyById(id: string): Vacancy | undefined {
  return getVacancies().find((v) => v.id === id);
}
