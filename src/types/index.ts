export type VacancyStatus =
  | "Applied"
  | "Viewed"
  | "Interview invited"
  | "Interview done"
  | "Offer"
  | "Rejected";

export type JobSource =
  | "LinkedIn"
  | "Indeed"
  | "Djinni"
  | "Work.ua"
  | "HH.ru"
  | "Robota.ua"
  | "Other";

export interface Vacancy {
  id: string;
  url: string;
  company: string;
  position: string;
  source: JobSource;
  status: VacancyStatus;
  dateApplied: string;
  comment?: string;
  tags?: string[];
  followUpDate?: string;
}

export interface DashboardStats {
  totalApplications: number;
  statusCounts: Record<VacancyStatus, number>;
  sourceCounts: Record<JobSource, number>;
  successRate: number;
}
