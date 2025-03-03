import { Header } from "@/components/ui/page-header";
import Image from "next/image";

const Page = () => {
    const teamHeaderText = `Join ACM IIT to unlock opportunities for learning, networking, and hands-on experiences.`;
    
    return(
        <>
        {/* Top left Blurred Circle */}
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        {/* Mid left Blurred Circle */}
        <div className="absolute top-[600px] left-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        
        {/* Header */}
        <Header pageName="Join us" title="Get Involved." headerText={teamHeaderText} />
        <div className="my-16 px-8 lg:px-24">
            <section className="my-8 flex gap-4 items-center">
                <h2 className="flex-0 font-raleway text-xl w-1/2 md:w-1/3">Wether you&apos;re a student, a tech enthusiast, or an innovator, there&apos;s a place for you here!</h2>
                <div className="flex-1 h-[2px] bg-accent-color-primary rounded-lg"></div>
            </section>

            <section className="font-raleway my-24 flex flex-col gap-4 items-center">
                <h2 className="text-2xl">Benefits of Joining</h2>
                <ul className="pl-0 mt-8 flex flex-col gap-4 crystyal-style-list">
                    <li>Access to workshops, events, and conferences.</li>
                    <li>Networking opportunities with peers and industry leaders.</li>
                    <li>Exclusive resources and tools to enhance technical skills.</li>
                    <li>Leadership and team-building experience.</li>
                </ul>
            </section>
        </div>
        <section className="relative mb-16 w-full h-[400px]">
            <div className="px-8 lg:px-24 flex justify-center items-center">
                <div className="z-[9] flex flex-col gap-8 font-raleway bg-fontcolor text-background rounded-lg p-8 w-full md:w-1/2">
                    <h2 className="text-2xl text-center">How to Join ACM IIT</h2>
                    <p className="text-sm font-lighter">
                    Share a few details about yourself, and we’ll guide you through the next steps to officially become part of our chapter. Whether you&apos;re looking to learn, network, or lead, there&apos;s a place for you here. Let’s build something great together!
                    </p>
                </div>
            </div>
            <Image src="/assets/ribbon.png" width={1200} height={378} alt="Ribbon" className="absolute bottom-[150px] w-full h-[400px] object-cover" />
        </section>
        </>
    );
};

export default Page;