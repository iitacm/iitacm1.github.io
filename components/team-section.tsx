import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import boardMembers from "../data/board_members.json";


let teamMembers = [];
// let orgTeamMembers = [];

// grab the first 3 board members from leadership team
teamMembers = boardMembers.filter((member) => member.category == "Leadership Team");


export const TeamSection = () => {
  return (
    <section className="bg-background py-16 px-8 text-center">
      <h2 className="text-2xl xl:text-3xl mb-6">Sneak peek of our Team</h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto max-h-80 overflow-y-hidden">
        {teamMembers.map((member, index) => (
        <Link key={index} href="/team" target="_blank">
        <div
            className={`flex flex-col items-center text-center ${
              index > 2 ? "opacity-50 blur-sm" : ""
            }`}
          >
            <div className="relative w-48 h-48 rounded-lg overflow-hidden">
            <Image
                src={member.picture}
                alt={member.name}
                // layout="fill"
                // objectFit="cover"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full layout-fill"
            />
            </div>
            <h3 className="text-lg mt-4 text-light-red">{member.position}</h3>
            <p className="text-sm">{member.name}</p>
        </div>
        </Link>
        ))}
      </div>

      {/* View Team Button */}
      <div className="mt-8">
        <Link href="/team">
            <Button variant="default">
            VIEW ACM IIT TEAM
            </Button>
        </Link>
      </div>
    </section>
  );
};