import Image from "next/image";

// Footer component for the contact page
export const ContactFooter = () => {
  return (
    <footer className="absolute top-[750px] md:top-[780px]  lg:top-[550px] w-full bg-fontcolor text-white">
      <div className="hidden md:block absolute top-[0px] sm:top-[-80px] md:top-[-150px]  sm:right-[10%]">
        <Image
          className="rounded-md"
          alt="flower design"
          src={`/assets/flower.png`}
          width={600}
          height={600}
        />
      </div>

      <div className="mt-[300px] p-8 gap-8 lg:px-24 lg:py-16 max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left lg:gap-4">
        <div className="flex flex-col mx-auto items-center mt-10">
          <Image
            src="/assets/acm_iit_logo.png"
            alt="ACM IIT Logo"
            width={36}
            height={36}
          />
          <p className="text-xs text-gray-400 my-4 text-center">
            Made with ❤ from
            <br /> the Web Design Team at IIT.
          </p>
        </div>
      </div>
    </footer>
  );
};
