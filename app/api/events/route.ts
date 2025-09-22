import { NextResponse } from 'next/server';
import { Event } from '@/lib/interfaces';
import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
    
    // Query the events table directly from the database
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
    
    // Type-safe events data
    const typedEvents: Event[] = events as Event[];
    
    return NextResponse.json({
      success: true,
      data: typedEvents
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch events' 
      },
      { status: 500 }
    );
  }
}

// POST route for creating new events
export async function POST(request: Request) {
  try {
    const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
    const eventData: Omit<Event, 'id'> = await request.json();
    
    // Validate required fields
    if (!eventData.name || !eventData.start_time || !eventData.end_time || !eventData.timezone) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: name, start_time, end_time, timezone' 
        },
        { status: 400 }
      );
    }
    
    // Insert into database and return the created event
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
    
    const newEvent = result[0] as Event;
    
    return NextResponse.json({
      success: true,
      data: newEvent
    });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create event' 
      },
      { status: 500 }
    );
  }
}
