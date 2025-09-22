// Database Event interface matching the exact schema
export interface Event {
    id?: number; // SERIAL PRIMARY KEY (optional for new events)
    name: string; // TEXT NOT NULL - Event title
    description: string; // TEXT - Event details
    start_time: string; // TIMESTAMP NOT NULL - Event start date/time
    end_time: string; // TIMESTAMP NOT NULL - Event end date/time  
    location: string; // TEXT - Event location
    place: string; // TEXT - Event place/room
    timezone: string; // TEXT NOT NULL - Event timezone
    link: string | null; // TEXT - Event link (nullable)
}

// Helper type for event status based on dates
export type EventStatus = 'upcoming' | 'ongoing' | 'past';

// Extended interface for events with computed status
export interface EventWithStatus extends Event {
    status: EventStatus;
}

interface SocialLinks {
    linkedin?: string;
    portfolio?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
}

export type TeamCategory = "Leadership Team" | "Operations Team" | "Technical Team";

export interface BoardMember {
    name: string;
    position: string;
    more_info: string;
    picture: string;
    year: string;
    major: string;
    minor?: string;
    socials: SocialLinks;
    category: TeamCategory;
}
  