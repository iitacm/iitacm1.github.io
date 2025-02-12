import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString.replace(" ", "T")); // Convert to valid Date format
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .replace(/(\d+)(?=(st|nd|rd|th))/g, "$1");
};


export const googleFormatDate = (dateString: string, timezone: string) => {
  const date = new Date(dateString.replace(" ", "T"));

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  return `${parts[4].value}${parts[0].value}${parts[2].value}T${parts[6].value}${parts[8].value}${parts[10].value}`;
};

export const outlookFormatDate = (dateString: string, timezone: string): string => {
  // Convert "YYYY-MM-DD HH:MM" into a valid Date object
  const date = new Date(dateString.replace(" ", "T"));

  // Format date in the specified timezone
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });

  // Extract formatted parts
  const parts = formatter.formatToParts(date);
  const formattedDate = `${parts[4].value}-${parts[0].value}-${parts[2].value}T${parts[6].value}:${parts[8].value}:${parts[10].value}`;

  // Extract the timezone offset (e.g., "-06:00")
  const offset = parts.find(part => part.type === "timeZoneName")?.value || "-06:00";

  return `${formattedDate}${offset}`;
};
