"use client"

import React from "react";
import Image from "next/image";
import { Event, EventMedia } from "@/lib/interfaces";
import { CloseSVG } from "@/app/svgs";
import { formatEventDate, formatEventTimeRange, getEventDuration } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const renderMediaCarousel = (media: EventMedia[]) => {
    if (!media || media.length === 0) return null;

    return (
      <div className="mb-6">
        <Carousel className="w-full max-w-lg mx-auto">
          <CarouselContent>
            {media.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {item.type === 'image' ? (
                    <Image
                      src={item.url}
                      alt={item.caption || `Event media ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <video
                      src={item.url}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-sm">
                      {item.caption}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {media.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>
        {media.length > 1 && (
          <div className="flex justify-center mt-2 space-x-1">
            {media.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseSVG />
        </button>

        <div className="p-6 md:p-8">
          {/* Event Title */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-fontcolor mb-2">
              {event.name}
            </h2>
            <div className="flex items-center text-light-red font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              {formatEventDate(event.start_time)}
            </div>
          </div>

          {/* Media Carousel */}
          {event.media && renderMediaCarousel(event.media)}

          {/* Event Details */}
          <div className="space-y-4 mb-6">
            {/* Time and Duration */}
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-fontcolor">
                  {formatEventTimeRange(event.start_time, event.end_time, event.timezone)}
                </div>
                <div className="text-sm text-gray-600">
                  Duration: {getEventDuration(event.start_time, event.end_time)}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-fontcolor">{event.location}</div>
                {event.place && (
                  <div className="text-sm text-gray-600">{event.place}</div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-fontcolor mb-3">About This Event</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {event.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            {event.link && (
              <Button asChild className="flex-1">
                <Link href={event.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Link>
              </Button>
            )}
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
