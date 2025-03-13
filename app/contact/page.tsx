import Link from "next/link";
import { TbBrandDiscord, TbBrandLinkedin  } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { Mail } from "lucide-react";

const Page = () => {
  return (
    <>
      {/* Mid left Blurred Circle */}
      <div className="absolute top-[700px] left-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>

      <div className="z-[1] mt-24 pt-24 p-8 lg:px-24 pb-[150px] rounded-b-[80px] bg-background">
        <div className="container mx-auto flex items-center justify-between lg:flex-row flex-col gap-8 lg:gap-0">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col items-start justify-center h-100 space-around gap-10">
            <div>
              <h2 className="text-5xl lg:text-6xl mb-4">Contact ACM IIT.</h2>
              <h2 className="text-5xl lg:text-6xl mb-4">Anytime.</h2>
            </div>
            <p className="text-lg">
              Reach Out to the ACM Board—We&apos;re Here to Help!
            </p>
          </div>

          {/* Right Section */}
          <div className="sm:min-w-[300px] lg:min-w-[400px] xl:min-w-[500px]">
            <div className="bg-zinc-300 rounded-3xl p-6">
              <ul>
                <li className="mb-12">
                  <Link
                    href="mailto:acm@iit.edu"
                    target="_blank"
                    className="flex items-center rounded-md p-3 bg-background"
                  >
                    <Mail className="w-7 h-7 mr-2" />
                    <span className="text-gray-800">acm@iit.edu</span>
                  </Link>
                </li>
                <li className="mb-12">
                  <Link
                    href="https://linkedin.com/company/acm-iit"
                    target="_blank"
                    className="flex items-center rounded-md p-3 bg-background"
                  >
                    <TbBrandLinkedin className="w-7 h-7 mr-2" />
                    <span className="text-gray-800">
                      linkedin.com/company/acm-iit
                    </span>
                  </Link>
                </li>
                <li className="mb-12">
                  <Link
                    href="https://discord.gg/yUjWpA48"
                    target="_blank"
                    className="flex items-center rounded-md p-3 bg-background"
                  >
                    <TbBrandDiscord className="w-7 h-7 mr-2" />
                    <span className="text-gray-800">
                      https://discord.gg/yUjWpA48
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/acm_iit"
                    target="_blank"
                    className="flex items-center rounded-md p-3 bg-background"
                  >
                    <IoLogoInstagram className="w-7 h-7 mr-2" />
                    <span className="text-gray-800">https://instagram.com/acm_iit</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
