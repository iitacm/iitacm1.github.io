import React from "react";
import { ArrowRightSVG } from "@/app/svgs"; // Assuming these exist and are exported properly
import Link from "next/link";

export const StayInTouch = () => {
  return (
    <div className="w-full font-raleway bg-background text-fontcolor flex flex-col items-center space-y-4">
      {/* Title */}
      <h2 className="text-2xl text-center mb-4">Stay in Touch</h2>

      {/* Social Media and Email Links */}
      <div className="w-full flex flex-col items-center space-y-8">
        {/* Discord */}
        <Link
          href="https://discord.gg/XPA6JaScYZ"  // Replace with your Discord URL
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-1/2 flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div className="flex items-center space-x-2">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#004765"
            >
              <path
                d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16"
                stroke="#004765"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 17.5L16.5 19.5C16.5 19.5 20.6713 18.1717 22 16C22 15 22.5301 7.85339 19 5.5C17.5 4.5 15 4 15 4L14 6H12"
                stroke="#004765"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.52832 17.5L7.52832 19.5C7.52832 19.5 3.35699 18.1717 2.02832 16C2.02832 15 1.49823 7.85339 5.02832 5.5C6.52832 4.5 9.02832 4 9.02832 4L10.0283 6H12.0283"
                stroke="#004765"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 14C7.67157 14 7 13.1046 7 12C7 10.8954 7.67157 10 8.5 10C9.32843 10 10 10.8954 10 12C10 13.1046 9.32843 14 8.5 14Z"
                stroke="#004765"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 14C14.6716 14 14 13.1046 14 12C14 10.8954 14.6716 10 15.5 10C16.3284 10 17 10.8954 17 12C17 13.1046 16.3284 14 15.5 14Z"
                stroke="#004765"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold">DISCORD</span>
          </div>
          <ArrowRightSVG className="w-5 h-5 text-red-600" />
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/acm_iit"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-1/2 flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div className="flex items-center space-x-2">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#720570"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#720570"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke="#720570"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke="#720570"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold">INSTAGRAM</span>
          </div>
          <ArrowRightSVG className="w-5 h-5 text-accent-color-primary" />
        </Link>

        {/* Email */}
        <Link
          href="mailto:acm@iit.edu"
          className="cursor-pointer w-1/2 flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div className="flex items-center space-x-2">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#B89300"
            >
              <path
                d="M7 9L12 12.5L17 9"
                stroke="#B89300"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                stroke="#B89300"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-bold">EMAIL</span>
          </div>
          <ArrowRightSVG className="w-5 h-5 text-accent-color-primary" />
        </Link>
      </div>
    </div>
  );
};
