const STORAGE_KEY = "vacancy-tracker-data";
export function getVacancies() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
export function saveVacancies(vacancies) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vacancies));
}
export function addVacancy(vacancy) {
    const vacancies = getVacancies();
    vacancies.push(vacancy);
    saveVacancies(vacancies);
}
export function updateVacancy(id, updates) {
    const vacancies = getVacancies();
    const index = vacancies.findIndex((v) => v.id === id);
    if (index !== -1) {
        vacancies[index] = { ...vacancies[index], ...updates };
        saveVacancies(vacancies);
    }
}
export function deleteVacancy(id) {
    const vacancies = getVacancies();
    saveVacancies(vacancies.filter((v) => v.id !== id));
}
export function updateVacancyStatus(id, status) {
    updateVacancy(id, { status });
}
export function getVacancyById(id) {
    return getVacancies().find((v) => v.id === id);
}
