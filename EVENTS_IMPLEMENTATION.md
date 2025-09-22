# Events Implementation - Database Integration & Type Safety

## Overview

This implementation integrates your events system with the database table structure you provided, ensuring perfect type safety and dynamic filtering of past/upcoming events.

## Database Schema Integration

### Updated Event Interface

The `Event` interface in `lib/interfaces.ts` now perfectly matches your database schema:

```typescript
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
```

### Additional Types

- `EventStatus`: Type for event status ('upcoming' | 'ongoing' | 'past')
- `EventWithStatus`: Extended interface that includes computed status

## Dynamic Event Filtering

### Utility Functions

New utility functions in `lib/utils.ts`:

- `isEventUpcoming(startTime: string)`: Checks if event hasn't started yet
- `isEventPast(endTime: string)`: Checks if event has ended
- `isEventOngoing(startTime: string, endTime: string)`: Checks if event is currently happening
- `determineEventStatus()`: Returns the current status of an event
- `getEventDuration()`: Calculates and formats event duration
- `formatEventTimeRange()`: Formats time range with timezone support

### Automatic Filtering

Events are now automatically filtered based on current date/time:
- **Upcoming Events**: Events that haven't started yet
- **Past Events**: Events that have already ended
- **Ongoing Events**: Events currently in progress (can be shown in upcoming tab)

## API Integration

### Events API Route (`/api/events`)

- **GET**: Fetches all events directly from the database table
- **POST**: Creates new events with validation and inserts into database
- Type-safe request/response handling
- Error handling with proper HTTP status codes
- Uses Neon Database with `@neondatabase/serverless`

### Custom Hook (`useEvents`)

The `useEvents` hook provides:
- Automatic event fetching
- Loading and error states
- Dynamic filtering of upcoming/past events
- Refetch functionality
- Type-safe return values

## Component Updates

### EventsTabs Component

Updated to use the new schema:
- Uses `useEvents` hook for data fetching
- Displays loading spinner during data fetch
- Shows error states gracefully
- Uses proper database field names (`start_time`, `end_time`)
- Dynamic tab defaulting based on available events

### AddToCalendar Component

Updated to work with new field names:
- Uses `start_time` and `end_time` instead of `date` and `endDate`
- Maintains all existing functionality
- Type-safe prop handling

## Data Structure

### Sample Events Data

The `data/events.json` file now contains events in the correct database format:

```json
{
  "id": 1,
  "name": "Event Name",
  "description": "Event description",
  "start_time": "2025-04-05 08:00",
  "end_time": "2025-04-06 14:30",
  "location": "Stuart Building, Chicago, IL",
  "place": "SB 107",
  "timezone": "America/Chicago",
  "link": "https://example.com"
}
```

## Database Integration Ready

### Database Utilities (`lib/database/events.ts`)

Complete database integration functions:
- `getAllEvents()`: Fetch all events from database table
- `getEventById(id)`: Fetch specific event by ID
- `createEvent(eventData)`: Create new event in database
- `updateEvent(id, eventData)`: Update existing event in database
- `deleteEvent(id)`: Delete event from database
- Helper functions for filtering events

## Type Safety Features

1. **Strict TypeScript**: All components use proper typing
2. **Database Schema Matching**: Interface matches exact database structure
3. **Null Safety**: Proper handling of nullable fields like `link`
4. **Date Validation**: Proper date parsing and timezone handling
5. **API Type Safety**: Request/response types are properly defined

## Dynamic Behavior

### Automatic Tab Management
- If no upcoming events exist, defaults to "Past" tab
- If upcoming events exist, defaults to "Upcoming" tab
- Events automatically move between tabs based on current date/time

### Real-time Updates
- Events are filtered in real-time based on current date
- No manual intervention needed to move events between past/upcoming
- Supports ongoing events (can appear in upcoming tab during event)

## Usage Examples

### Using the Hook
```typescript
const { upcomingEvents, pastEvents, loading, error } = useEvents();
```

### Creating New Events
```typescript
const newEvent = await createEvent({
  name: "New Event",
  description: "Event description",
  start_time: "2025-06-01 18:00",
  end_time: "2025-06-01 20:00",
  location: "Campus",
  place: "Room 101",
  timezone: "America/Chicago",
  link: null
});
```

### Event Status Checking
```typescript
const status = determineEventStatus(event.start_time, event.end_time, event.timezone);
const duration = getEventDuration(event.start_time, event.end_time);
```

## Migration Notes

### Breaking Changes
- Field names changed from `date`/`endDate` to `start_time`/`end_time`
- Added required `id` field (optional for new events)
- All components updated to use new schema

### Backward Compatibility
- Old event data structure is no longer supported
- All existing events need to be migrated to new format
- API responses use new format

## Database Integration Complete ✅

The system now fully integrates with your database:

1. ✅ **Database Connection**: Uses Neon Database with proper connection
2. ✅ **API Routes**: GET and POST endpoints connect directly to database
3. ✅ **CRUD Operations**: Full Create, Read, Update, Delete functionality
4. ✅ **Type Safety**: All operations are type-safe with your schema
5. ✅ **Dynamic Filtering**: Events automatically move between past/upcoming

## Optional Future Enhancements

1. Add authentication for event creation/modification
2. Add pagination for large event lists  
3. Add event search and filtering capabilities
4. Add event categories or tags
5. Add event registration functionality

## Testing

The implementation has been tested with:
- TypeScript compilation (✓ Passes)
- Next.js build process (✓ Successful)
- Type safety validation (✓ All types correct)
- Dynamic filtering logic (✓ Working)
- Component rendering (✓ No errors)

All events will now automatically be categorized as past or upcoming based on their actual dates, providing a dynamic and always-current events display.
