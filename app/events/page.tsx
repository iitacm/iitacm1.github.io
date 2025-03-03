import { FeaturedEventSection } from '@/components/events/featured-event';
import { EventsTabs } from '@/components/events/events-tabs';
import { Header } from '@/components/ui/page-header';

const Page = () => {
    const eventImagePath = "/event.svg";
    const eventHeaderText = `Explore our calendar of upcoming events, revisit highlights from past successes, and stay updated on opportunities to connect, learn, and innovate with our vibrant tech community.`;
    return(
        <>
        {/* Top left Blurred Circle */}
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        {/* Mid left Blurred Circle */}
        <div className="absolute top-[600px] left-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        
        {/* Header */}
        <Header pageName="Events" title="Join us IRL." headerText={eventHeaderText} imagePath={eventImagePath} />

        {/* Featured Event Section */}
        <FeaturedEventSection />

        {/* Events Tabs */}
        <section className="w-full my-8 px-8 lg:px-24 max-w-6xl mx-auto">
            <EventsTabs />
        </section>
        <br />
        </>
    );
}

export default Page;