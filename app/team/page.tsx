import { Header } from "@/components/ui/page-header";
import BoardMembers from "@/components/team/board-members";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { TbBrandLinkedin } from "react-icons/tb";



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
            {/* <div className="team">
                <h3 className="mb-8">Leadership Team</h3>
                <div className="board-members grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    <div className="mx-auto md:mx-0 h-80 w-3/4">
                        <div className="h-3/4 w-full">
                            <Image src="/assets/acm_pictures/team/jason.jpg" width={300} height={400} className="w-full h-full object-cover" alt="Team Member" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <h3 className="text-light-red text-lg">President</h3>
                            <p className="text-sm text-gray">Jason Zheng</p>
                            <div className="mt-px text-sm flex justify-between w-full items-center">
                                <div className="socials flex items-center gap-2">
                                    <span className="text-fontcolor"><TbBrandLinkedin className="w-6 h-6" /></span>
                                </div>
                                <div>
                                    <Button variant="default" className="text-sm bg-gray text-background hover:bg-fontcolor">More Info</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <BoardMembers />
        </div>
        </>
    );
};

export default Page;