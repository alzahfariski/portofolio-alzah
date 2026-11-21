import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tahun proyek dari Firestore bisa berupa string/angka atau Timestamp terserialisasi ({seconds}).
export function formatYear(year: unknown): string {
  if (year && typeof year === "object" && "seconds" in year) {
    const seconds = (year as { seconds: number }).seconds;
    // UTC supaya server dan browser menampilkan tahun yang sama.
    return String(new Date(seconds * 1000).getUTCFullYear());
  }
  return String(year ?? "");
}
