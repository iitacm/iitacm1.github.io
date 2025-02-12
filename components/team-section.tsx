import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Jason Zheng",
    role: "President",
    image: "/assets/acm_pictures/team/jason.png",
  },
  {
    name: "Nick Naing",
    role: "External Event Coordinator",
    image: "/assets/acm_pictures/team/nick.png",
  },
  {
    name: "Jiya Sheetal Rathi",
    role: "Vice President",
    image: "/assets/acm_pictures/team/jiya.jpg",
  },
  {
    name: "Blurred Member 1",
    role: "Member",
    image: "/assets/acm_pictures/team/lorena.jpg",
  },
  {
    name: "Blurred Member 2",
    role: "Member",
    image: "/assets/acm_pictures/team/vijay.jpg",
  },
];

export const TeamSection = () => {
  return (
    <section className="bg-background py-16 px-8 text-center">
      <h2 className="text-2xl mb-6">Sneak peek of our Team</h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
        <Link key={index} href="/team" target="_blank">
        <div
            className={`flex flex-col items-center text-center ${
              index > 2 ? "opacity-50 blur-sm" : ""
            }`}
          >
            <div className="relative w-48 h-48 rounded-lg overflow-hidden">
            <Image
                src={member.image}
                alt={member.name}
                // layout="fill"
                // objectFit="cover"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full layout-fill"
            />
            </div>
            <h3 className="text-lg mt-4 text-light-red">{member.role}</h3>
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
        {/* <Link href="/team">
          <button className="bg-red-600 text-white px-6 py-2 rounded-md border border-red-800 hover:bg-red-700 transition">
            VIEW ACM IIT TEAM
          </button>
        </Link> */}
      </div>
    </section>
  );
};