"use client"
import { CalendarIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Event {
  name: string
  date: string
  description: string
}

const upcomingEvents: Event[] = [
  {
    name: "Event Name",
    date: "Jan 5th 2024",
    description: "Event Description. More about this event",
  },
  {
    name: "Event Name",
    date: "Jan 5th 2024",
    description: "Event Description. More about this event",
  },
  {
    name: "Event Name",
    date: "Jan 5th 2024",
    description: "Event Description. More about this event",
  },
]

const pastEvents: Event[] = [
  {
    name: "Past Event",
    date: "Dec 1st 2023",
    description: "Past event description",
  },
  {
    name: "Past Event",
    date: "Nov 28th 2023",
    description: "Past event description",
  },
]

export function EventsTabs() {
  return (
    <Tabs defaultValue="upcoming" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger
          value="upcoming"
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full"
        >
          UPCOMING EVENTS
        </TabsTrigger>
        <TabsTrigger
          value="calendar"
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full"
        >
          CALENDER
        </TabsTrigger>
        <TabsTrigger value="past" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full">
          PAST EVENTS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="flex items-start justify-between p-6 border-b">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{event.name}</h3>
              <p className="text-red-500">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <button className="flex items-center gap-2 text-sm">
              <CalendarIcon className="w-4 h-4" />
              Add to Google
            </button>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="calendar" className="min-h-[600px] bg-blue-50/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">December 2024</h2>
          <div className="flex gap-2">
            <button className="p-2">←</button>
            <button className="p-2">→</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {/* Calendar placeholder - In a real app, you'd integrate with a calendar library */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square border rounded-lg p-2 bg-white">
              {i + 1}
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="past" className="space-y-4">
        {pastEvents.map((event, index) => (
          <div key={index} className="flex items-start justify-between p-6 border-b">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{event.name}</h3>
              <p className="text-red-500">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}