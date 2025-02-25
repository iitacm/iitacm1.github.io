"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type Event } from "@/lib/interfaces"
import { formatEventDate } from "@/lib/utils"
import { AddToCalendar } from "./add-to-calendar"
import Link from "next/link"

const upcomingEvents: Event[] = [
  {
    name: "ICPC Event - Crack the Code - 2",
    description: "Following our successful Introduction to Cracking Coding Problems session, we are excited to bring you Part 2 of our ICPC Coding Workshop, featuring Professor Michael Lee. In this session, we\’ll dive deeper into competitive programming techniques, covering essential problem-solving strategies, algorithmic thinking, and hands-on coding challenges.",
    date: "2025-02-27 12:45",
    endDate: "2024-02-27 14:00",
    location: "Stuart Building, Chicago, IL",
    place: "SB 111",
    timezone: "America/Chicago",
    link: "https://www.linkedin.com/posts/acm-iit_competitiveprogramming-icpc-codingchallenges-activity-7299986111169187841-Zjrp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACEEUYEBfR38tezSmfZ_VCQFeUnQkTa7YhY"
  }
]

const pastEvents: Event[] = [
  {
    name: "Career Elevation Workshop",
    date: "2025-02-08 11:30",
    description: "Polish your Resume and Elevator Pitch with insights from industry experts to boost your career.",
    endDate: "2025-02-08 16:00",
    location: "Online",
    place: "Kaplan Tellabs",
    timezone: "America/Chicago",
    link: null
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
            <div className="space-y-2 max-w-1/2 lg:max-w-[calc(100%-120px)]">
              <h3 className="text-2xl text-fontcolor font-bold">{event.name}</h3>
              <p className="text-light-red">{formatEventDate(event.date)}</p>
              <p className="text-gray-600">{event.description}</p>
              { event.link && <p className="mt-2"><Link href={event.link} target="_blank" className="pb-2 border-b border-light-red text-light-red">Learn More</Link></p> }
            </div>
            <AddToCalendar {...event} />
          </div>
        )) : <div className="flex items-center justify-center p-6 h-24"><h3 className="text-lg">Stay tuned... We&apos;re cooking.</h3></div>}
      </TabsContent>

      <TabsContent value="calendar" className="min-h-[600px] bg-blue-50/50 rounded-lg p-4">
        <div className="w-full overfolow-scroll">
          <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&src=YWNtQGlpdC5lZHU&src=Y18yMWZlOWQ5YWIwYzBhNTk1OTUwOWViNDU5NThiMmZiY2JkODRiY2MwYTNmMTI0YmY1MzAxYTk4YmE5ZjVkZWI2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&color=%233F51B5&color=%230B8043" className="border border-1" width="800" height="600">
          </iframe>
        </div>
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