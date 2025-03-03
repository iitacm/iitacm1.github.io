import { Header } from "@/components/ui/page-header";
import BoardMembers from "@/components/team/board-members";

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
            <BoardMembers />
        </div>
        </>
    );
};

export default Page;