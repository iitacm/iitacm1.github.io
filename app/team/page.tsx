import { Header } from "@/components/ui/page-header";

const Page = () => {
    const teamHeaderText = `Our dedicated team is committed to fostering innovation, collaboration, and a love for technology within the IIT community. From organizing impactful events to supporting members\’ growth and building a vibrant network of tech enthusiasts.`;
    return(
        <>
        {/* Top left Blurred Circle */}
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        {/* Mid left Blurred Circle */}
        <div className="absolute top-[600px] left-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
        
        {/* Header */}
        <Header pageName="Team" title="Know us." headerText={teamHeaderText} />
        <div className="my-16 px-8 lg:px-24">
            {/* Team Type (eg, Leadership Team) */}
            <div className="team">
                <h3 className="mb-4">Leadership Team</h3>
                <div className="board-members grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                    <div className="bg-gray h-24 w-full"></div>
                    <div className="bg-gray h-24 w-full"></div>
                    <div className="bg-gray h-24 w-full"></div>
                    <div className="bg-gray h-24 w-full"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Page;