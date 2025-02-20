export interface Event {
    name: string; // Event title
    description: string; // Event details
    date: string; // Event start date
    endDate: string; // Event end date
    location: string; // Event location
    timezone: string; // Event timezone
}

interface SocialLinks {
    linkedin?: string;
    portfolio?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
}

type TeamCategory = "Leadership Team" | "Operations Team" | "Technical Team";

export interface BoardMember {
    name: string;
    position: string;
    more_info: string;
    picture: string;
    year: string;
    socials: SocialLinks;
    category: TeamCategory;
}
  