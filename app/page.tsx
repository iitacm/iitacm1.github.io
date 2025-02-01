import React from "react";
import { NavigationBar } from "@/components/ui/navigation-bar";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <header className="mt-24 text-background flex items-center h-96 w-full py-12 px-24 space-x-4  bg-[url('/assets/header_background_1.png')] bg-cover">
        <div className="flex-1 w-1/3">
          <h3 className="text-3xl">Welcome to <span className="text-accent-color-primary">ACM IIT.</span></h3>
          <p className="font-raleway text-sm mt-2">
            A vibrant community of tech enthusiasts through dyanmic events, engaging competitions, insightful 
            seminars, and exciting opportunities to learn, grow and innovate.
          </p>
        </div>
        <div className="flex-0 w-1/2 justify-end">
          <h1 className="text-6xl leading-[1] text-right">
            The Largest Computer Community in <br /><span className="text-accent-color-primary">Illinois Tech.</span>
          </h1>
        </div>
      </header>
      <main className="flex-1">

        <section className="flex justify-between h-46 p-24 gap-4">
          <Image className="" alt="ACM IIT Picture" src={`/assets/acm_pictures/1.jpeg`} width={450} height={450} />
          <div className="w-1/2 flex flex-col align-center">
            <h2 className="text-lg text-center text-accent-color-primary">OUR EVENTS</h2>
            <p className="font-raleway text-sm mt-2 flex-1">
              Stay ahead in the world of computing with ACM IIT's exciting events! 
              From hands-on workshops and insightful tech talks to networking sessions and hackathons, we provide opportunities for students to learn, innovate, and connect with industry leaders. 
              Don't miss out on these chances to grow and excel in your computing journey.
            </p>
            <Link className="flex items-center justify-center gap-2 size-max p-2 border-2 bg-light-red border-light-red text-background" href="/events">
              ACM IIT EVENTS 
              <svg width="40" height="20" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12H47M47 12L36.6154 2M47 12L36.6154 22" stroke="#FFF5F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;