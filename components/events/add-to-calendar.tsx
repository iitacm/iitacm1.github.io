"use client";

import { useEffect, useState } from "react";
import { GoogleSVG, MicrosoftSVG } from "@/app/svgs";
import { Event } from "@/lib/interfaces";  
import { googleFormatDate, formatToOutlook } from "@/lib/utils";

export const AddToCalendar = (event : Event) => {
    const { name: title, description, date: startTime, endDate: endTime, location, timezone } = event;
    const [googleCalendarUrl, setGoogleCalendarUrl] = useState("");
    const [outlookCalendarUrl, setOutlookCalendarUrl] = useState("");

    useEffect(() => {
        if (startTime && endTime) {
            const googleformattedUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                title
            )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
                location
            )}&dates=${googleFormatDate(startTime, timezone)}/${googleFormatDate(endTime, timezone)}&ctz=${timezone}`;
            
            const outlookformattedUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=${encodeURIComponent(
                formatToOutlook(startTime, timezone)
            )}&enddt=${encodeURIComponent(
                formatToOutlook(endTime, timezone)
            )}&subject=${encodeURIComponent(title)}&location=${encodeURIComponent(
                location
            )}&body=${encodeURIComponent(description)}`;
                    

            setGoogleCalendarUrl(googleformattedUrl);
            setOutlookCalendarUrl(outlookformattedUrl);
        }
      }, [title, description, location, startTime, endTime, timezone]);


    return (
        
        <div className="flex flex-col items-center gap-4 font-bold">
            {/* Google Calendar Button */}
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 text-sm">
                <GoogleSVG className="w-6 h-6 lg:w-4 lg:h-4" color="#CC0000" />
                Add to Google
            </button>
            </a>

            {/* Outlook Calendar Button */}
            <a href={outlookCalendarUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 text-sm bg-slate-200 text-fontcolor px-2 py-1 rounded-md">
                    <MicrosoftSVG className="w-4 h-4" />
                    Add to Outlook
                </button>
            </a>
        </div>
    );
};