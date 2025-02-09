import Image from 'next/image';
import { FeaturedEventSection } from '@/components/events/featured-event';

const Page = () => {
    return(
        <>
        {/* Top left Blurred Circle */}
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        {/* Mid left Blurred Circle */}
        <div className="absolute top-[600px] left-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        
        {/* Header */}
        <div className="mt-24 px-8 text-background bg-fontcolor flex flex-col space-y-4 justify-center items-center w-full h-80 lg:px-24 lg:flex-row lg:justify-between lg:space-y-0">
            <div className="w-full h-full flex flex-col justify-center lg:w-1/3 lg:flex-1">
                <div className="relative">
                    <span className="absolute top-[-15px] left-0 font-raleway font-thin">Events</span>
                    <h3 className="text-6xl">Join us IRL.</h3>
                </div>
                <p className="font-raleway text-sm mt-4">
                Explore our calendar of upcoming events, revisit highlights from past successes, and 
                stay updated on opportunities to connect, learn, and innovate with our vibrant tech community.
                </p>
            </div>
            <div className="hidden flex-0 lg:flex w-full lg:w-1/2 justify-end">
                <Image src="/event.svg" width={180} height={180} className="object-cover" alt="Event Picture" />
            </div>
        </div>

        {/* Featured Event Section */}
        <FeaturedEventSection />
        </>
    );
}

export default Page;