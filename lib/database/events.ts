import { Event } from '@/lib/interfaces';
import { neon } from "@neondatabase/serverless";

// Database utility functions for events
// Direct database connection and queries

export async function getAllEvents(): Promise<Event[]> {
  const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
  
  const events = await sql`
    SELECT 
      id,
      name,
      description,
      start_time,
      end_time,
      location,
      place,
      timezone,
      link,
      media
    FROM events
    ORDER BY start_time ASC
  `;
  
  return events as Event[];
}

export async function getEventById(id: number): Promise<Event | null> {
  const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
  
  const result = await sql`
    SELECT 
      id,
      name,
      description,
      start_time,
      end_time,
      location,
      place,
      timezone,
      link,
      media
    FROM events
    WHERE id = ${id}
  `;
  
  return result.length > 0 ? (result[0] as Event) : null;
}

export async function createEvent(eventData: Omit<Event, 'id'>): Promise<Event> {
  const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
  
  const result = await sql`
    INSERT INTO events (
      name, 
      description, 
      start_time, 
      end_time, 
      location, 
      place, 
      timezone, 
      link,
      media
    ) VALUES (
      ${eventData.name},
      ${eventData.description || ''},
      ${eventData.start_time},
      ${eventData.end_time},
      ${eventData.location || ''},
      ${eventData.place || ''},
      ${eventData.timezone},
      ${eventData.link},
      ${JSON.stringify(eventData.media)}
    )
    RETURNING *
  `;
  
  return result[0] as Event;
}

export async function updateEvent(id: number, eventData: Partial<Event>): Promise<Event> {
  const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
  
  // For simplicity, we'll require all fields for update
  // In a production app, you'd want more sophisticated partial updates
  const result = await sql`
    UPDATE events 
    SET 
      name = COALESCE(${eventData.name}, name),
      description = COALESCE(${eventData.description}, description),
      start_time = COALESCE(${eventData.start_time}, start_time),
      end_time = COALESCE(${eventData.end_time}, end_time),
      location = COALESCE(${eventData.location}, location),
      place = COALESCE(${eventData.place}, place),
      timezone = COALESCE(${eventData.timezone}, timezone),
      link = COALESCE(${eventData.link}, link),
      media = COALESCE(${eventData.media ? JSON.stringify(eventData.media) : null}, media)
    WHERE id = ${id}
    RETURNING *
  `;
  
  if (result.length === 0) {
    throw new Error('Event not found');
  }
  
  return result[0] as Event;
}

export async function deleteEvent(id: number): Promise<boolean> {
  const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
  
  const result = await sql`
    DELETE FROM events 
    WHERE id = ${id}
    RETURNING id
  `;
  
  return result.length > 0;
}

// Helper functions for event filtering
export function filterUpcomingEvents(events: Event[]): Event[] {
  const now = new Date();
  return events.filter(event => {
    const start = new Date(event.start_time.replace(" ", "T"));
    return now < start;
  }).sort((a, b) => 
    new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
  );
}

export function filterPastEvents(events: Event[]): Event[] {
  const now = new Date();
  return events.filter(event => {
    const end = new Date(event.end_time.replace(" ", "T"));
    return now > end;
  }).sort((a, b) => 
    new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
  );
}

export function filterOngoingEvents(events: Event[]): Event[] {
  const now = new Date();
  return events.filter(event => {
    const start = new Date(event.start_time.replace(" ", "T"));
    const end = new Date(event.end_time.replace(" ", "T"));
    return now >= start && now <= end;
  });
}
