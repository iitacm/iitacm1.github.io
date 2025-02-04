"use client";

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export function CarouselPlugin() {
  const images = [
    '/assets/acm_pictures/2.png',
    '/assets/acm_pictures/1.jpeg',
    '/assets/acm_pictures/3.png'
  ];

  return (
    <Carousel
      plugins={[Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
                <div className="flex  items-center justify-center">
                    <Image className="rounded-md" alt="ACM IIT Picture" src={image} width={450} height={450} />
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}