import Image from "next/image";
import Link from "next/link";

export const FeaturedEventSection = () => {
    const featuredEventImage = "/assets/acm_pictures/featured_event_2.jpg";

    return (
        <section className="w-full mt-8 mb-16 px-8 lg:px-24 max-w-6xl mx-auto">
            <div className="my-4 w-full flex items-center justify-center gap-4">
                <h3 className="flex-0 text-xl">Featured Event</h3>
                <div className="flex-1 w-full h-[2px] bg-accent-color-primary rounded-lg"></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full h-64 lg:w-1/2">
                    <Image 
                    alt={`Featured Event`} 
                    src={featuredEventImage} 
                    height={450} 
                    width={450} 
                    className="w-full h-full object-cover layout-fit"/>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="h-auto mb-4 lg:h-1/3 lg:mb-2 text-center">Career Elevation Workshop <br /><span className="text-sm text-gray">08th Feb. 2025</span></h2>
                    <p className="h-auto mb-4 lg:h-2/3 lg:mb-2 font-raleway">
                    The Career Elevation Workshop was a fantastic opportunity for attendees to polish their resumes and elevator pitches with insights from industry experts. Participants gained valuable strategies to enhance their professional presence, improve their networking skills, and boost their career prospects.
                    With interactive discussions and expert guidance, this event helped students refine their job application approach and build confidence for future opportunities.
                    </p>
                    <div className="flex flex-row justify-center font-raleway">
                        {/* Links and Socials Here */}
                        <Link target="_blank" href="https://www.linkedin.com/posts/acm-iit_careergrowth-resumeworkshop-networking-activity-7296014612955574272-LJxg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACEEUYEBfR38tezSmfZ_VCQFeUnQkTa7YhY" className="text-accent-color-primary transition pb-px border-b border-transparent hover:border-accent-color-primary">Check it out!</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}