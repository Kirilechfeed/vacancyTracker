import { supabase } from "@/lib/supabase";
import { Vacancy, VacancyStatus } from "@/types/index";

export const getVacancies = async () => {
  const { data, error } = await supabase.from("Vacancy").select("*");
  if (error) throw error;
  return data;
};

export const addVacancy = async (vacancy: Vacancy) => {
  const { data, error } = await supabase
    .from("Vacancy")
    .insert(vacancy)
    .select();
  if (error) throw error;
  return data;
};

export const updateVacancyStatus = async (
  id: string,
  status: VacancyStatus,
) => {
  const { data, error } = await supabase
    .from("Vacancy")
    .update({ status })
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
};

export const deleteVacancy = async (id: string) => {
  const { data, error } = await supabase
    .from("Vacancy")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
};
