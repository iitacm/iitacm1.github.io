import React from "react";
import { NavigationBar } from "@/components/ui/navigation-bar";
import { CarouselPlugin } from "@/components/ui/home-carousel";
import { Gallery } from "@/components/gallery";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TeamSection } from "@/components/team-section";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/ui/footer";

const Home = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Top left Blurred Circle */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
      {/* Mid left Blurred Circle */}
      <div className="absolute top-[600px] left-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>

      <NavigationBar />

      <header className="mt-24 px-8 text-background bg-[url('/assets/header_background_1.png')] bg-cover flex flex-col space-y-4 justify-center items-center w-full h-96 lg:px-24 lg:flex-row lg:h-screen lg:space-x-4 lg:space-y-0">
        <div className="w-full lg:w-1/3 lg:flex-1">
          <h3 className="text-2xl lg:text-3xl">
            Welcome to{" "}
            <span className="text-accent-color-primary">ACM IIT.</span>
          </h3>
          <p className="font-raleway text-sm mt-2">
            A vibrant community of tech enthusiasts through dyanmic events,
            engaging competitions, insightful seminars, and exciting
            opportunities to learn, grow and innovate.
          </p>
        </div>
        <div className="flex-0 w-full lg:w-1/2 justify-end">
          <h1 className="text-4xl lg:text-6xl leading-[1] lg:text-right">
            The Largest Computer Community in <br />
            <span className="text-accent-color-primary">Illinois Tech.</span>
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        {/* Events Section */}
        <section className="flex flex-col items-center lg:flex-row lg:items-start justify-between lg:h-[500px] p-8 lg:p-24 gap-4">
          <Image
            className="rounded-md"
            alt="ACM IIT Picture"
            src={`/assets/acm_pictures/1.jpeg`}
            width={450}
            height={450}
          />

          <div className="w-full flex flex-col items-center mt-4 lg:w-1/2 lg:mt-0 lg:h-full">
            <h2 className="text-lg text-center text-accent-color-primary">
              OUR EVENTS
            </h2>
            <p className="font-raleway text-sm mt-2 flex-1">
              Stay ahead in the world of computing with ACM IIT&apos;s exciting
              events! From hands-on workshops and insightful tech talks to
              networking sessions and hackathons, we provide opportunities for
              students to learn, innovate, and connect with industry leaders.
              Don&apos;t miss out on these chances to grow and excel in your
              computing journey.
            </p>
            <Link href="/events">
              <Button variant="default" className="mt-4">
                ACM IIT EVENTS
                <svg
                  width="36"
                  height="20"
                  viewBox="0 0 49 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12H47M47 12L36.6154 2M47 12L36.6154 22"
                    stroke="#FFF5F5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </section>

        {/* About Us */}
        <section className="flex flex-col items-center lg:flex-row lg:items-start justify-between lg:h-[500px] p-8 lg:p-24 gap-4">
          <div className="w-full flex flex-col items-center mt-4 lg:w-1/2 lg:mt-0 lg:h-full">
            <h2 className="text-lg text-center text-accent-color-primary">
              ABOUT US
            </h2>
            <p className="font-raleway text-sm mt-2 flex-1">
              ACM IIT is the premier student chapter dedicated to advancing
              computing knowledge, fostering innovation, and building a thriving
              community of tech enthusiasts at Illinois Institute of Technology.
              We strive to inspire, educate, and connect students through
              workshops, events, and collaborative opportunities, empowering
              them to excel in the ever-evolving world of technology.
            </p>
          </div>

          <div className="w-full flex flex-col items-center mt-4 lg:w-1/2 lg:mt-0 lg:h-full">
            <CarouselPlugin />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-8 w-full relative flex flex-col items-center lg:flex-row lg:items-start justify-between lg:h-auto p-8 lg:p-24 gap-4">
          <Image
            className="absolute top-[10px] left-1/2 tranform -translate-x-1/2 max-w-full"
            src={`/assets/acm_pictures/little_stars.png`}
            height={195}
            width={1000}
            alt="ACM's Little Stars"
          />
          <div className="w-full flex flex-col items-center mt-4 lg:mt-0 lg:h-full">
            <h2 className="text-xl text-center">
              Building Connections, Inspiring Collaborations and Growing
              Together
            </h2>
            <Gallery />
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Newsletter Section */}
        <section className="w-full p-8 lg:p-24">
          <NewsletterSignup />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
