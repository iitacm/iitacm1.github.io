import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatInTimeZone } from "date-fns-tz";

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

// Event utility functions for database schema
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const determineEventStatus = (startTime: string, endTime: string, _timezone: string): 'upcoming' | 'ongoing' | 'past' => {
  const now = new Date();
  const start = new Date(startTime.replace(" ", "T"));
  const end = new Date(endTime.replace(" ", "T"));
  
  if (now < start) {
    return 'upcoming';
  } else if (now >= start && now <= end) {
    return 'ongoing';
  } else {
    return 'past';
  }
};

export const isEventUpcoming = (startTime: string): boolean => {
  const now = new Date();
  const start = new Date(startTime.replace(" ", "T"));
  return now < start;
};

export const isEventPast = (endTime: string): boolean => {
  const now = new Date();
  const end = new Date(endTime.replace(" ", "T"));
  return now > end;
};

// Additional event utility functions
export const isEventOngoing = (startTime: string, endTime: string): boolean => {
  const now = new Date();
  const start = new Date(startTime.replace(" ", "T"));
  const end = new Date(endTime.replace(" ", "T"));
  return now >= start && now <= end;
};

export const getEventDuration = (startTime: string, endTime: string): string => {
  const start = new Date(startTime.replace(" ", "T"));
  const end = new Date(endTime.replace(" ", "T"));
  const diffMs = end.getTime() - start.getTime();
  
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}m`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return `${minutes}m`;
  }
};

export const formatEventTimeRange = (startTime: string, endTime: string, timezone: string): string => {
  const start = new Date(startTime.replace(" ", "T"));
  const end = new Date(endTime.replace(" ", "T"));
  
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: timezone
  };
  
  const startFormatted = start.toLocaleTimeString('en-US', timeFormat);
  const endFormatted = end.toLocaleTimeString('en-US', timeFormat);
  
  return `${startFormatted} - ${endFormatted}`;
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

// Helper to format date for Outlook (fixed -06:00 for Central Time)
export const formatToOutlook = (dateString: string, timezone: string): string => {
  // Convert "YYYY-MM-DD HH:MM" into a Date object
  // return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}-06:00`;
  return formatInTimeZone(new Date(dateString.replace(" ", "T")), timezone, "yyyy-MM-dd'T'HH:mm:ssXXX");
};
