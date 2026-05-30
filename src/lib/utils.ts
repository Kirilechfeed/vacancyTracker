import { Vacancy, JobSource } from "@/types/index";

export function extractSourceFromUrl(url: string): JobSource {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.toLowerCase();

    if (domain.includes("linkedin")) return "LinkedIn";
    if (domain.includes("indeed")) return "Indeed";
    if (domain.includes("djinni")) return "Djinni";
    if (domain.includes("work.ua")) return "Work.ua";
    if (domain.includes("robota.ua")) return "Robota.ua";

    if (domain.includes("hh.ru") || domain.includes("headhunter"))
      return "HH.ru";

    return "Other";
  } catch {
    return "Other";
  }
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    Applied: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    Viewed:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
    "Interview invited":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    "Interview done":
      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
    Offer: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    Rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  };
  return colors[status] || "bg-gray-100 text-gray-800";
}

export function getSourceColor(source: string): string {
  const colors: Record<string, string> = {
    LinkedIn: "bg-blue-500",
    Indeed: "bg-indigo-500",
    Djinni: "text-orange-500",
    "Work.ua": "bg-cyan-500",
    "HH.ru": "bg-red-500",
    "Robota.ua": "bg-green-500",
    Other: "bg-gray-500",
  };
  return colors[source] || "bg-gray-500";
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function daysAgo(dateString: string): number {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
