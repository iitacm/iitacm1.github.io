"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuSVG, CloseSVG } from "@/app/svgs";
import Image from "next/image";

export const NavigationBar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const links = [
        { href: "/", label: "Home" },
        { href: "/team", label: "Team" },
        { href: "/events", label: "Events" },
        { href: "/merch", label: "Merch" },
        { href: "/contact", label: "Contact" },
        { href: "https://www.scarlethacks.com", label: "ScarletHacks", target: "_blank" },
        { href: "/sigs", label: "SIGs" },
        { href: "/get-involved", label: "Get Involved" }
    ];

    return (
        <nav className="z-10 w-full fixed top-0 left-0 px-8 lg:px-24 h-24 bg-background flex justify-center items-center">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-4">
                    <Image src="/assets/acm_iit_logo.png" alt="Logo" width={70} height={80} />
                </div>
                {/* Menu Items on Large Screen */}
                <div className="hidden lg:flex items-center space-x-4 text-md flex-1 justify-end">
                    {
                        links.map((link) => (
                            <a key={link.href} href={link.href} target={link.hasOwnProperty("target") ? link.target : "_self" } className={clsx("pb-px border-b border-transparent", {"text-accent-color-primary active-link" : pathname === link.href})}>
                                {link.label}
                            </a>
                        ))
                    }
                </div>

                {/* Menu Icon on Small Screen */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden" aria-label="Open menu">
                        <MenuSVG />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={clsx(
                    "bg-fontcolor fixed inset-0 bg-background lg:hidden z-50 transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
                    )}
                >
                    <div className="flex flex-col h-full">
                    {/* Close button */}
                    <div className="flex justify-end p-8">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-foreground" aria-label="Close menu">
                        <CloseSVG />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                        {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target={link.hasOwnProperty("target") ? link.target : "_self"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={clsx(
                            "text-xl font-medium transition-colors duration-200",
                            pathname === link.href
                                ? "text-accent-color-primary active-link"
                                : "text-background hover:text-accent-color-primary",
                            )}
                        >
                            {link.label}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};