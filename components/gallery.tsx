"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const Gallery = () => {
    const images = [
        '/assets/acm_pictures/12.png',
        '/assets/acm_pictures/10.png',
        '/assets/acm_pictures/16.png',
        '/assets/acm_pictures/8.png',
        '/assets/acm_pictures/7.png',
        '/assets/acm_pictures/5.png',
        '/assets/acm_pictures/17.png',
        '/assets/acm_pictures/6.png',
        '/assets/acm_pictures/14.png',
        '/assets/acm_pictures/19.png',
    ];

    const ref = useRef(null);

    return (
        <div className="mt-8 relative w-full overflow-hidden">
      {/* Desktop - Grid Layout with Shake Effect */}
      <motion.div
        ref={ref}
        className="hidden lg:grid grid-cols-3 gap-4 p-8"
        whileInView={{
          y: [-2, 2, -2], // Shaking effect
          transition: { duration: 0.5, repeat: 2, ease: "easeInOut" },
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`relative w-full rounded-lg overflow-hidden 
              ${index % 2 === 0 ? "row-span-2 h-80" : "h-40"}`}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
            //   layout="fill"
            //   objectFit="cover"
            width={500}
            height={500}
            className="rounded-lg object-cover layout-fill w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile - Auto-scrolling horizontal slider */}
      <motion.div
        className="lg:hidden flex w-[200%] md:w-[150%] animate-slide"
        animate={{ x: ["0%", "-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        <div className="grid grid-cols-3 gap-4 p-4 w-full">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-40 md:h-60 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                // layout="fill"
                // objectFit="cover"
                width={500}
                height={500}
                className="rounded-lg object-cover layout-fill w-full h-full"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    );
};