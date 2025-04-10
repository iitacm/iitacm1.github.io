import Image from "next/image";
import Link from "next/link";

export const FeaturedEventSection = () => {
    const featuredEventImage = "/assets/acm_pictures/featured_event_4.jpg";

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
                    <h2 className="h-auto mb-4 lg:h-1/3 lg:mb-2 text-center">ScarletHacks 2025 <br /><span className="text-sm text-gray">05th Apr. 2025</span></h2>
                    <p className="h-auto mb-4 lg:h-2/3 lg:mb-2 font-raleway">
                    ScarletHacks is an annual hackathon hosted by ACM at Illinois Tech, bringing together students, developers, and tech enthusiasts to collaborate, innovate, and create impactful projects. Participants engage in a 24-48 hour coding marathon, working in teams to solve real-world problems, build software solutions, and showcase their creativity.
                    </p>
                    <div className="flex flex-row justify-center font-raleway">
                        {/* Links and Socials Here */}
                        <Link target="_blank" href="https://www.linkedin.com/posts/acm-iit_scarlethacks-hackathon-innovation-activity-7310521446995214336-IFXH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACEEUYEBfR38tezSmfZ_VCQFeUnQkTa7YhY" className="text-accent-color-primary transition pb-px border-b border-transparent hover:border-accent-color-primary">Check it out!</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}