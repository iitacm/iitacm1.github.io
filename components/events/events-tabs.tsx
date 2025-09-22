"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatEventDate } from "@/lib/utils"
import { AddToCalendar } from "./add-to-calendar"
import { EventModal } from "./event-modal"
import { useEvents } from "@/lib/hooks/useEvents"
import { Event } from "@/lib/interfaces"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function EventsTabs() {
  const { upcomingEvents, pastEvents, loading, error } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-light-red"></div>
        <span className="ml-2">Loading events...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Error Loading Events</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Tabs defaultValue={upcomingEvents.length > 0 ? "upcoming" : "past"} className="font-raleway w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger
          value="upcoming"
          className="data-[state=active]:bg-fontcolor data-[state=active]:text-background rounded-full"
        >
          UPCOMING
        </TabsTrigger>
        <TabsTrigger value="past" className="data-[state=active]:bg-fontcolor data-[state=active]:text-background rounded-full">
          PAST
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
          <div key={event.id || index} className="font-raleway bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
                <p className="text-light-red font-semibold">{formatEventDate(event.start_time)}</p>
                <p className="text-gray-600 line-clamp-3">{event.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center gap-2 hover:bg-light-red hover:text-white hover:border-light-red transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    More Info
                  </Button>
                  {event.link && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={event.link} target="_blank" className="text-light-red hover:text-light-red hover:bg-light-red/10">
                        Learn More →
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="lg:ml-4">
                <AddToCalendar {...event} />
              </div>
            </div>
          </div>
        )) : (
          <div className="flex items-center justify-center p-12 bg-gray-50 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Stay tuned...</h3>
              <p className="text-gray-500">We&apos;re cooking up some amazing events!</p>
            </div>
          </div>
        )}
      </TabsContent>

      <TabsContent value="past" className="space-y-4">
        {pastEvents.map((event, index) => (
          <div key={event.id || index} className="font-raleway bg-gray-50 rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
                <p className="text-gray-600 font-semibold">{formatEventDate(event.start_time)}</p>
                <p className="text-gray-700 line-clamp-3">{event.description}</p>
                
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center gap-2 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>

    {/* Event Modal */}
    {selectedEvent && (
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    )}
  </>
  )
}