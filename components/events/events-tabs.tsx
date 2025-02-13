"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type Event } from "@/lib/interfaces"
import { formatEventDate } from "@/lib/utils"
import { AddToCalendar } from "./add-to-calendar"

const upcomingEvents: Event[] = [
  // {
  //   name: "Women in Tech Panel",
  //   description: "An engaging discussion with Jasleen Bedi from Discover and Omotola, a Senior Software Engineer at Microsoft on the topic.",
  //   date: "2024-03-10 13:00",
  //   endDate: "2024-03-10 15:30",
  //   location: "Kaplan Institute, Chicago",
  //   timezone: "America/Chicago",
  // }
]

const pastEvents: Event[] = [
  {
    name: "Career Elevation Workshop",
    date: "2024-01-05 00:00",
    description: "Polish your Resume and Elevator Pitch with insights from industry experts to boost your career.",
    endDate: "2025-02-08 23:59",
    location: "Online",
    timezone: "America/Chicago",
  },
]

export function EventsTabs() {
  return (
    <Tabs defaultValue={upcomingEvents.length > 0 ? "upcoming" : "past"} className="font-raleway w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger
          value="upcoming"
          className="data-[state=active]:bg-fontcolor data-[state=active]:text-background rounded-full"
        >
          UPCOMING
        </TabsTrigger>
        <TabsTrigger
          value="calendar"
          className="data-[state=active]:bg-fontcolor data-[state=active]:text-background rounded-full"
        >
          CALENDER
        </TabsTrigger>
        <TabsTrigger value="past" className="data-[state=active]:bg-fontcolor data-[state=active]:text-background rounded-full">
          PAST
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
          <div key={index} className="font-raleway flex items-start justify-between p-6 border-b">
            <div className="space-y-2">
              <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
              <p className="text-light-red">{formatEventDate(event.date)}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <AddToCalendar {...event} />
          </div>
        )) : <div className="flex items-center justify-center p-6 h-24"><h3 className="text-lg">Stay tuned... We&apos;re cooking.</h3></div>}
      </TabsContent>

      <TabsContent value="calendar" className="min-h-[600px] bg-blue-50/50 rounded-lg p-4">
        <iframe 
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&src=YWNtQGlpdC5lZHU&src=Y18yMWZlOWQ5YWIwYzBhNTk1OTUwOWViNDU5NThiMmZiY2JkODRiY2MwYTNmMTI0YmY1MzAxYTk4YmE5ZjVkZWI2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&color=%233F51B5&color=%230B8043" className="border border-1" width="800" height="600">
        </iframe>
        {/* <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">December 2024</h2>
          <div className="flex gap-2">
            <button className="p-2">←</button>
            <button className="p-2">→</button>
          </div>
        </div> */}
        <div className="grid grid-cols-7 gap-4">
          {/* Calendar placeholder - In a real app, you'd integrate with a calendar library */}
          {/* {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square border rounded-lg p-2 bg-white">
              {i + 1}
            </div>
          ))} */}
        </div>
      </TabsContent>

      <TabsContent value="past" className="space-y-4">
        {pastEvents.map((event, index) => (
          <div key={index} className="font-raleway flex items-start justify-between p-6 border-b">
            <div className="space-y-2">
              <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
              <p className="text-gray font-bold">{formatEventDate(event.date)}</p>
              <p className="text-gray">{event.description}</p>
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}