export interface Event {
    name: string; // Event title
    description: string; // Event details
    date: string; // Event start date
    endDate: string; // Event end date
    location: string; // Event location
    place: string; // Event place
    timezone: string; // Event timezone
    link: string | null; // Event link
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
    socials: SocialLinks;
    category: TeamCategory;
}
  