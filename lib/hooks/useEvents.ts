"use client";

import { useState, useEffect } from 'react';
import { Event } from '@/lib/interfaces';
import { isEventUpcoming, isEventPast } from '@/lib/utils';

interface UseEventsReturn {
  allEvents: Event[];
  upcomingEvents: Event[];
  pastEvents: Event[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useEvents = (): UseEventsReturn => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/events');
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch events');
      }
      
      setAllEvents(result.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Dynamic filtering based on current date
  const upcomingEvents = allEvents.filter(event => isEventUpcoming(event.start_time));
  const pastEvents = allEvents.filter(event => isEventPast(event.end_time));

  return {
    allEvents,
    upcomingEvents,
    pastEvents,
    loading,
    error,
    refetch: fetchEvents
  };
};
