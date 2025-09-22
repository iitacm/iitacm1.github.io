"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatEventDate } from "@/lib/utils"
import { AddToCalendar } from "./add-to-calendar"
import { useEvents } from "@/lib/hooks/useEvents"
import Link from "next/link"

export function EventsTabs() {
  const { upcomingEvents, pastEvents, loading, error } = useEvents();

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
          <div key={event.id || index} className="font-raleway flex items-start justify-between p-6 border-b">
            <div className="space-y-2 max-w-1/2 lg:max-w-[calc(100%-200px)]">
              <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
              <p className="text-light-red">{formatEventDate(event.start_time)}</p>
              <p className="text-gray-600">{event.description}</p>
              { event.link && <p className="mt-2"><Link href={event.link} target="_blank" className="pb-2 border-b border-light-red text-light-red">Learn More</Link></p> }
            </div>
            <AddToCalendar {...event} />
          </div>
        )) : <div className="flex items-center justify-center p-6 h-24"><h3 className="text-lg">Stay tuned... We&apos;re cooking.</h3></div>}
      </TabsContent>

      <TabsContent value="past" className="space-y-4">
        {pastEvents.map((event, index) => (
          <div key={event.id || index} className="font-raleway flex items-start justify-between p-6 border-b">
            <div className="space-y-2">
              <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
              <p className="text-gray font-bold">{formatEventDate(event.start_time)}</p>
              <p className="text-gray">{event.description}</p>
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}