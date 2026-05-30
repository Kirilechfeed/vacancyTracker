import { supabase } from "@/lib/supabase";
export const getVacancies = async () => {
    const { data, error } = await supabase.from("Vacancy").select("*");
    if (error)
        throw error;
    return data;
};
export const addVacancy = async (vacancy) => {
    const { data, error } = await supabase
        .from("Vacancy")
        .insert(vacancy)
        .select();
    if (error)
        throw error;
    return data;
};
export const updateVacancyStatus = async (id, status) => {
    const { data, error } = await supabase
        .from("Vacancy")
        .update({ status })
        .eq("id", id)
        .select();
    if (error)
        throw error;
    return data;
};
export const deleteVacancy = async (id) => {
    const { data, error } = await supabase
        .from("Vacancy")
        .delete()
        .eq("id", id)
        .select();
    if (error)
        throw error;
    return data;
};
