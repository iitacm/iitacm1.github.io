import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DiscordSVG, InstagramSVG, EmailSVG } from "@/app/svgs";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-fontcolor text-white">
      
      {/* Socials and Mail List Row */}
      <div className="p-8 lg:p-24 max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left gap-8">
        {/* Left Section - Socials and Email */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-base lg:text-lg tracking-wider">CONNECT.</h3>
          <p className="text-base lg:text-lg tracking-wider">OUR SOCIALS.</p>
          <div className="flex gap-4 text-2xl">
            <Link href="https://discord.gg/XPA6JaScYZ" target="_blank">
              <DiscordSVG />
            </Link>
            <Link href="https://www.instagram.com/acm_iit" target="_blank">
              <InstagramSVG />
            </Link>
          </div>
        </div>

        {/* Right Section - Mailing List */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-base lg:text-lg tracking-wider">JOIN OUR MAILING LIST.</h3>
          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2"
          >
            join now
          </Button>
        </div>
      </div>

      {/* Email Row */}
      <div className="p-8 lg:py-16 lg:px-24 max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left">
        <div className="flex flex-col items-center lg:items-start text-center gap-2">
            <h3 className="text-base lg:text-lg text-center flex gap-2 items-center"><EmailSVG /> EMAIL.</h3>
            <div>
              <p className="text-sm"><Link href="mailto:acm@iit.edu">acm@iit.edu</Link></p>
            </div>
          </div>
      </div>

      {/* Bottom Section - Logo and Copyright */}
      <div className="flex flex-col mx-auto items-center mt-10">
        <Image
          src="/assets/acm_iit_logo.png"
          alt="ACM IIT Logo"
          width={40}
          height={40}
        />
        <p className="text-xs text-gray-400 my-2 text-center">
          Association of Computing Machinery <br /> Illinois Institute of Technology.
        </p>
      </div>
    </footer>
  );
};
