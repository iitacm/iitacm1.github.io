"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const NavigationBar = () => {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "Home" },
        { href: "/team", label: "Team" },
        { href: "/events", label: "Events" },
        { href: "/merch", label: "Merch" },
        { href: "/contact", label: "Contact" },
        { href: "/scarlethacks", label: "ScarletHacks" },
        { href: "/sigs", label: "SIGs" },
        { href: "/get-involved", label: "Get Involved" }
    ];

    return (
        <nav className="w-full fixed top-0 left-0 px-8 lg:px-24 h-24 bg-background flex justify-center items-center">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-4">
                    <Image src="/assets/acm_iit_logo.png" alt="Logo" width={70} height={80} />
                </div>
                <div className="hidden lg:flex items-center space-x-4 text-md flex-1 justify-end">
                    {
                        links.map((link) => (
                            <a key={link.href} href={link.href} className={clsx("pb-px border-b border-transparent", {"text-accent-color-primary active-link" : pathname === link.href})}>{link.label}</a>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
};