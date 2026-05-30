import { useState, useCallback, useEffect } from "react";
import { getVacancies, addVacancy, updateVacancy, deleteVacancy, } from "@lib/storage";
export function useVacancies() {
    const [vacancies, setVacancies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const data = getVacancies();
        setVacancies(data);
        setIsLoading(false);
    }, []);
    const addVacancyLocal = useCallback((vacancy) => {
        addVacancy(vacancy);
        setVacancies((prev) => [...prev, vacancy]);
    }, []);
    const updateVacancyLocal = useCallback((id, updates) => {
        updateVacancy(id, updates);
        setVacancies((prev) => prev.map((v) => (v.id === id ? { ...v, ...updates } : v)));
    }, []);
    const deleteVacancyLocal = useCallback((id) => {
        deleteVacancy(id);
        setVacancies((prev) => prev.filter((v) => v.id !== id));
    }, []);
    const updateStatus = useCallback((id, status) => {
        updateVacancyLocal(id, { status });
    }, [updateVacancyLocal]);
    return {
        vacancies,
        isLoading,
        addVacancy: addVacancyLocal,
        updateVacancy: updateVacancyLocal,
        deleteVacancy: deleteVacancyLocal,
        updateStatus,
    };
}
